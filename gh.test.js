
let page;

beforeEach(async () => {
   page = await browser.newPage(); 
   await page.setDefaultTimeout(30_000); 
});

afterEach(() => {
  page.close();
});

describe("Reservation System Tests", () => {
  beforeEach(async () => {
   await page.goto("https://qamid.tmweb.ru/client/index.php");
 });
   test("'Positive booking of one seat'", async () => {
    await page.click("[class='movie-seances__time']")
    await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
    await page.click(".acceptin-button");
    await page.click(".acceptin-button");
   const actual = await page.$("[src='i/QR_code.png']");
    await expect(actual).not.toBeNull();
   }, 80_000);

   test("'Booking multiple seats at oncet'", async () => {
    await page.click("[class='movie-seances__time']");
    await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
    await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
    await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
   await page.click(".acceptin-button");
    await page.click(".acceptin-button");
   const actual = await page.$("[src='i/QR_code.png']");
    await expect(actual).not.toBeNull();
   }, 80_000);

   test("'Attempt to reserve an occupied seat'", async () => {
    await page.click("[class='movie-seances__time']");
    await page.click("[class='buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken']");
   const actual = await page.$("#non-existing-button");
    await expect(actual).toBe(null);
   }, 80_000);

 });
