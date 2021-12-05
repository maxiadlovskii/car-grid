const puppeteer = require("puppeteer");

let browser;
(async () => {
    const searchQuery = "stackoverflow";

    browser = await puppeteer.launch({headless: false});
    const [page] = await browser.pages();
    await page.goto("https://www.google.com/");
    await page.waitForSelector('#L2AGLb', {visible: true});
    await page.click('#L2AGLb');
    await page.waitForSelector('input[aria-label="Пошук"]', {visible: true});
    await page.type('input[aria-label="Пошук"]', searchQuery);
    await Promise.all([
        page.keyboard.press("Enter"),
    ]);
    await page.waitForSelector(".LC20lb", {visible: true});
    const searchResults = await page.evaluate(() => {
            return [...document.querySelectorAll(".LC20lb")].map(e => ({
                title: e.innerText,
                link: e.parentNode.href,
            }))
        }
    );
    await page.goto(searchResults[0].link, {'timeout': 10000, 'waitUntil':'load'});
    const libCount = await page.evaluate(() => {
            const count = {};
            [...document.querySelectorAll("script")].forEach(e => {
                const src = e.getAttribute('src');
                const splittedSrc = src ? src.split('/') : []
                const splittedSrcLength = splittedSrc.length
                const libName = splittedSrcLength ? splittedSrc[splittedSrcLength - 1] : ''
                if(libName && count[libName]){
                    count[libName] = count[libName] + 1
                } else if (libName){
                    count[libName] = 1
                }
            })
            return count
        }
    );
    console.log({ libCount });
})()
    .catch(err => console.error(err))
    .finally(async () => await browser.close())
;
