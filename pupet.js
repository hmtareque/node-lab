const puppeteer = require('puppeteer');

async function MyFunction(scrapelink) {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(scrapelink, { waitUntil: "networkidle2" });

    const placeholder = 4;

    // you need to pass the placeholder as follows 
    const fourthLink = await page.evaluate(link_position => {
        return document.links[link_position].href
    }, placeholder);
    console.log(fourthLink);

    browser.close();
}

MyFunction("https://stackoverflow.com/");