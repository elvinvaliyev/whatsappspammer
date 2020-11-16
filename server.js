const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  //take a name in inspect code and take title
  await page.waitForSelector("span [title='TitleName']");
  const target = await page.$("span [title='TitleName']");
  await target.click();
  //take a div in chrome of lable after "Write something" with copy selector 
  const inp = await page.$(
    "Selector will be here"
  );
//how many times to write and what to write
  for (let i = 0; i < 5; i++) {
    await inp.type("Just a check");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");