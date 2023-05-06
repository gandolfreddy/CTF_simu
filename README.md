# CTF_simu

搭建一個模擬部落格與個人系統，讓學生嘗試使用社交工程方式，破解機密資訊。

## 使用方式

1. 安裝 [Node.js](https://nodejs.org/en)。
2. 安裝 [ngrok](https://ngrok.com/download)。
3. 下載此專案。
4. 在專案目錄下終端機，執行 `npm install`。
5. 在專案目錄下終端機，執行 `npm run dev`。
6. 另外開啟終端機，並切換至專案目錄下，並執行 `ngrok http 3002`。
    > 使用 Ngrok 前，請進入 [dashboard.ngrok.com](https://dashboard.ngrok.com/login)，申請一組帳號並登入 ，取得對應的 Authtoken 後，可於任意終端機／命令列視窗，執行 `ngrok config add-authtoken [此處填入你的 Authtoken]`。
7. 複製 ngrok 產生的網址，貼到瀏覽器中，即可看到網頁，分別路徑為：
    * `/blog`  -> 部落格頁面
    * `/login` -> 登入頁面