import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "請輸入姓名"),
  phone: z.string().trim().regex(/^09\d{8}$|^0\d{1,2}-?\d{6,8}$/, "請輸入正確電話"),
  service: z.string().trim().min(1, "請選擇需求項目"),
  message: z.string().trim().max(500, "備註請勿超過 500 字").optional(),
  consent: z.boolean().refine((value) => value, { message: "請先閱讀並同意個資蒐集告知" }),
  website: z.string().max(0).optional(),
});
