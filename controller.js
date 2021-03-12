let puppeteer = require('puppeteer');

exports.search = async(req, res) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://www.google.com/search?q=" + req.params.q);
        const result = await page.evaluate(() => {
            let datas = [];
            for (let i = 0; i < 3; i++) {
                let link = document.querySelectorAll('.iUh30')[i].innerText;
                let heading = document.querySelectorAll('.LC20lb')[i].innerText;
                let desc = document.querySelectorAll('.aCOpRe')[i].innerText;
                let hasil = {
                    link: link,
                    heading: heading,
                    desc: desc
                };
                datas.push(hasil);
            }
            if (datas.length > 0) {
                return {
                    search: datas,
                    status: true
                };
            } else {
                return {
                    search: datas,
                    status: false
                };
            }
        })

        res.json(result);
        res.end();
        // console.log(res);
    } // console.log(res);