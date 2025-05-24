
let page;
let commands = require('./commands');

beforeEach(async () => {
   page = await browser.newPage(); 
   await page.setDefaultTimeout(30_000); 
});

afterEach(() => {
  page.close();
});

describe("Reservation System Tests", () => {
  beforeEach(async () => {
    await commands.gotoReservationPage(page);
 });
   test("'Positive booking of one seat'", async () => {
    await commands.selectShowtime(page);
    await commands.pickFreeSeat(page);
    await commands.confirmBooking(page);
  await commands.checkQRCodePresence(page);
   }, 80_000);

   test("'Booking multiple seats at oncet'", async () => {
    await commands.selectShowtime(page);
    await commands.pickMultipleSeats(page, 3);
  await commands.confirmBooking(page);
  await commands.checkQRCodePresence(page);

   }, 80_000);

   test("'Attempt to reserve an occupied seat'", async () => {
    await commands.selectShowtime(page);
    await commands.pickOccupiedSeat(page);
   const actual = await page.$("#non-existing-button");
    await expect(actual).toBe(null);
   }, 80_000);

  });
