# 國豐當舖官網

這是國豐當舖的新 Next.js 官網專案，視覺參考舊資料中的藍色元素版。

## 本機啟動

```bash
pnpm install
pnpm dev
```

預設網址：`http://localhost:3000`

## 檢查與建置

```bash
pnpm lint
pnpm build
```

## 環境變數

請參考 `.env.example`。

- `NEXT_PUBLIC_SITE_URL`：正式網址
- `NEXT_PUBLIC_GA_ID`：GA4 Measurement ID，設定後記錄電話、LINE 與表單成功事件
- `CONTACT_EMAIL`：聯絡收件信箱
- `LINE_URL`：LINE 官方帳號連結
- `FORM_NOTIFICATION_EMAIL`：表單通知信箱，未串接前保留
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`、`TURNSTILE_SECRET_KEY`：Cloudflare Turnstile 人機驗證金鑰；兩者都設定後才會強制驗證

## GA4 轉換事件

- `contact`：點擊電話或 LINE，參數 `contact_method` 可區分 `phone`、`line`。
- `form_start`：使用者首次開始填寫諮詢表單。
- `form_validation_error`：前端欄位或安全驗證未完成。
- `turnstile_success`、`turnstile_error`、`turnstile_expired`：Cloudflare Turnstile 驗證狀態。
- `form_submit_error`：表單傳送失敗，可區分 `server`、`network`。
- `generate_lead`：諮詢表單成功送出，建議在 GA4 標記為主要轉換。

## 資料與素材

主要素材位於：

`public/assets/old-blue`

來源整理資料位於：

`C:\Users\森\Documents\Codex\ydcs-old-site-archive-review\_整理後`

## 修改內容

- 公司資料請改 `data/site.ts`
- 服務項目請改 `data/services.ts`
- 共用頁首/頁尾請改 `components/Header.tsx`、`components/Footer.tsx`
