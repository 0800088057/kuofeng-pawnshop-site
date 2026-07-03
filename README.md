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
- `CONTACT_EMAIL`：聯絡收件信箱
- `LINE_URL`：LINE 官方帳號連結
- `FORM_NOTIFICATION_EMAIL`：表單通知信箱，未串接前保留

## 資料與素材

主要素材位於：

`public/assets/old-blue`

來源整理資料位於：

`C:\Users\森\Documents\Codex\ydcs-old-site-archive-review\_整理後`

## 修改內容

- 公司資料請改 `data/site.ts`
- 服務項目請改 `data/services.ts`
- 共用頁首/頁尾請改 `components/Header.tsx`、`components/Footer.tsx`
