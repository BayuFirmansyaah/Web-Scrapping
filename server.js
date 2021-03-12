const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const app = express();
const route = require('./routes');

route(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static('./static/'));
app.listen(3000, () => {
    console.log(`Server started on port`);
});


// (async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.google.com/search?q=kamu');
//     const result = await page.evaluate(() => {
//         let datas = [];
//         for (let i = 0; i < 5; i++) {
//             let link = document.querySelectorAll('.iUh30')[i].innerText;
//             let heading = document.querySelectorAll('.LC20lb')[i].innerText;
//             let hasil = {
//                 link: link,
//                 heading: heading
//             }
//             datas.push(hasil);
//         }
//         return datas;
//     })

//     console.log(result);
//     browser.close();
// })();