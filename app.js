/*

/blog  -> 回應部落格頁面，對應 HTML 檔案為 views/blog.html
/login -> 回應登入頁面，對應 HTML 檔案為 views/login.html
/register -> 回應註冊頁面，對應 HTML 檔案為 views/register.html
/info -> 回應個人資料，以 JSON 格式回應，內容包含 name、account、password 等欄位
/qa   -> 回應安全性問題答案，以 JSON 格式回應，內容包含 a1、a2、a3 欄位
/mission-failed -> 回應任務失敗頁面，對應 HTML 檔案為 views/missionFailed.html
/forget-password -> 回應忘記密碼頁面，對應 HTML 檔案為 views/forgetPassword.html
/security-qa -> 回應安全問題頁面，對應 HTML 檔案為 views/securityQA.html
/personal-info -> 回應個人資料頁面，對應 HTML 檔案為 views/persionalInfo.html

*/

const express = require('express');
const app = express();
const port = 3002;
let failCount = 0;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blog.html');
});

app.get('/info', (req, res) => {
    res.send({
        name: 'Freddy',
        account: 'gandolfreddy',
        password: 'a2s3d4j56k7l89',
        email: "dummy.wang@dummy.com",
    });
});

app.get('/qa', (req, res) => {
    res.send({
        a1: 'Kaohsiung',
        a2: '麥麥、致狗',
        a3: '長髮',
    });
});

app.get('/mission-failed', (req, res) => {
    failCount++;
    console.log(`目前已失敗次數: ${failCount}`);
    res.sendFile(__dirname + '/views/missionFailed.html');
});

app.get('/forget-password', (req, res) => {
    res.sendFile(__dirname + '/views/forgetPassword.html');
});

app.get('/security-qa', (req, res) => {
    res.sendFile(__dirname + '/views/securityQA.html');
});

app.get('/personal-info', (req, res) => {
    res.sendFile(__dirname + '/views/personalInfo.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});