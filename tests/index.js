const puppeteer = require("puppeteer");
const aria = require("./utils/aria");

const scenario = async page => {
  await page.goto("http://localhost:3000/challenge/0");

  await page.click(aria.byLabel("modal-button-close"));
  await page.type(aria.byLabel("styles-.grid-display"), "gridgridgrid");
  await page.click(aria.byLabel("level-submit"));

  /*
   * The url should be the same
   * The message should show
   * The button should have that emoji on it
   */
  const submitButton = await page.$(aria.byLabel("level-submit")).asElement();
  console.log(submitButton);
};

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: 100,
    args: ["--verbose", "--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  page.setViewport({ width: 1200, height: 1000 });
  page.bringToFront();

  page.on("console", msg => console.log(msg));

  try {
    await scenario(page);
  } catch (e) {
    console.error(e);
  }

  // await browser.close();
})();
