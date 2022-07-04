const puppeteer = require('puppeteer');
(async() => {
    const url = 'https://example.com';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const pdfConfig = {
        path: 'example.pdf', // Saves pdf to disk.
        format: 'A4',
        printBackground: true,
    };
    await page.emulateMediaType('screen');
    const pdf = await page.pdf(pdfConfig);
    await browser.close();
    return pdf;
})();