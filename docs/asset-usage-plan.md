# 國豐當舖舊素材套用計畫

本文件依 `docs/asset-inventory.md` 的盤點結果，整理後續逐頁優化方向。目標不是把所有舊圖硬塞進網站，而是把「最有辨識度、最接近舊站精神」的素材放到正確位置。

## 優先順序

1. 首頁
   - 保留目前指定的 `public/assets/ui/kf-hero-banner.png` 作為主 banner。
   - 前景錢鈔人維持 `public/assets/legacy-web02/i25.png`，但需檢查桌機與手機版大小，不要壓到標題。
   - 可補用 `public/assets/legacy-web02/n01.png` 作為首頁分隔裝飾或 section banner。
   - `public/assets/legacy-web02/in_b02.png` 可評估是否放在 CTA 或公益段落，增加舊站角色感。

2. 服務總覽頁 `/services`
   - 優先使用 `public/assets/old-blue/service-modules.png` 或 `public/assets/old-blue/module-02.png` 作為舊站風格參考。
   - 目前服務卡已用圖示，但版型偏新式卡片，可改得更接近舊站九宮格服務項目。
   - 未使用的 `01-04.png` 到 `01-25.png` 需要逐張比對，選出最符合六大服務的圖示。

3. 各服務分頁 `/services/[slug]`
   - 目前各頁已使用一批 `legacy-web02/i01` 到 `i24` 流程圖，但仍需檢查是否跟舊站每個服務頁原本的對應一致。
   - `car-loan`：優先檢查 `i01` 到 `i04` 與 `01-04` 到 `01-08` 的對應。
   - `second-mortgage`：優先檢查 `i13` 到 `i16`、`old-blue/blue-second-mortgage.png`、`second-mortgage-flow.png`。
   - `check-loan`：優先檢查 `i17` 到 `i20` 與 `old-blue/check-loan-flow.png`。
   - `refinance`：優先檢查 `old-blue/house-refinance-flow.png`。
   - 每頁頂部服務圖 `service.image` 應統一使用同一系列圖，不要混用風格。

4. 關於與公益區
   - `public/assets/legacy-web02/in_i01.jpg` 尚未使用，可作為關於公司或門市介紹照片。
   - `public/assets/legacy-web02/f01.jpg` 與 `in_s01.jpg` 尚未使用，可作為公益或信任感區塊背景。
   - 目前已使用 `in_i02.jpg`、`in_i03.jpg`、`in_b03.png`，後續要調整尺寸與位置，避免手機版過大或被切。

5. Footer 與聯絡區
   - 目前已使用 `footer-qr-mascot.png`，但應再校正 QR、錢鈔人、地址資訊的比例。
   - 若 QR 或角色太小，需改成獨立圖片排版，不要只用合成圖硬縮放。

6. 原始設計稿
   - `C:\Users\森\Downloads\DROPBOX\錢超人檔案\檔案\01.ai` 是最重要的原始向量檔。
   - 若要更精緻，後續應從 AI 檔匯出透明背景錢鈔人與服務 icon，再替換現有 PNG。
   - `web.png` 是完整舊首頁長圖，適合作為比對參考，不建議直接放到網頁中。

## 暫不建議

- 不建議把含有舊文字的整張舊首頁截圖直接當 banner，會再次造成文字重疊。
- 不建議把所有素材都放上網站，會讓頁面變亂；應優先放能增加品牌辨識度與導覽清楚度的圖。
- 不建議混用太多不同年代與不同解析度的圖示，需要逐頁統一尺寸與留白。

## 下一輪實作建議

1. 先修首頁：確認 banner、錢鈔人、服務卡、公益區、footer 的比例。
2. 再修服務總覽：改成更接近舊站的服務矩陣。
3. 再逐頁修六個服務頁：每頁核對 icon、流程圖、主視覺與 CTA。
4. 最後處理手機版：逐頁截圖檢查文字、圖片裁切與浮動按鈕遮擋。
