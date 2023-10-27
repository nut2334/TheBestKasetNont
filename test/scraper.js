const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.facebook.com/ChaLaewww');

  await page.waitForSelector('div[data-pagelet="ProfileTimeline"]');

  const textInsideProfileTimeline = await page.evaluate(() => {
    const div = document.querySelector('div[data-pagelet="ProfileTimeline"]');
    return div ? div.textContent : null;
  });

  console.log('ข้อความภายใน ProfileTimeline:', textInsideProfileTimeline);

  await browser.close();
})();
