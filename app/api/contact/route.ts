import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

const resendEndpoint = "https://api.resend.com/emails";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "表單格式不正確，請重新送出。" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ message: "請確認表單欄位是否填寫正確。" }, { status: 400 });
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ message: "已收到您的諮詢資料。" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.FORM_NOTIFICATION_EMAIL;
  const fromEmail = process.env.FORM_FROM_EMAIL || "國豐當舖表單 <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return NextResponse.json({ message: "表單通知尚未設定完成，請改用電話或 LINE 聯絡。" }, { status: 503 });
  }

  const emailBody = [
    "國豐當舖網站收到新的諮詢表單：",
    "",
    `姓名：${data.name}`,
    `電話：${data.phone}`,
    `需求項目：${data.service}`,
    `備註：${data.message || "未填寫"}`,
    "",
    `送出時間：${new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" })}`,
  ].join("\n");

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `國豐當舖網站諮詢：${data.name} / ${data.service}`,
      text: emailBody,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ message: "通知寄送失敗，請稍後再試或改用電話聯絡。" }, { status: 502 });
  }

  return NextResponse.json({ message: "已收到您的諮詢資料，我們會儘快與您聯絡。" });
}
