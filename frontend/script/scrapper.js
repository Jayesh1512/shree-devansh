import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';

(async () => {
    const url = 'https://www.amazon.in/l/27943762031?ie=UTF8&marketplaceID=A21TJRUUN4KGV&me=A2GP2T5FXD1LNX';
    
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'networkidle2' });

    const content = await page.content();
    
    const $ = cheerio.load(content);

    const titles = [];
    $('._offer-faceout-carousel-card_style_offerFaceoutContainer__2Ex8G').each((i, el) => {
        const title = $(el).find('span.a-truncate-cut').text().trim(); 
        const price = $(el).find('.a-price-whole').text().trim();
        const imgUrl = $(el).find('img').attr('src');
        let link = $(el).find('.a-link-normal').attr('href');

        if (link && !link.startsWith('http')) {
            link = `https://www.amazon.in${link}`;
        }

        titles.push({ title, price, imgUrl, link });
    });

    await fs.writeFile('data.json', JSON.stringify(titles, null, 2));

    console.log('Data has been written to data.json');

    await browser.close();
})();
