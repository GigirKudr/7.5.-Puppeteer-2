
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const commands = require('../../commands');

let browser, page;

Before(async function () {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.setDefaultTimeout(30_000);
});

After(async function () {
  await page.close();
  await browser.close();
});

Given('I am on the reservation page', async function () {
  await commands.gotoReservationPage(page);
});

When('I select a showtime', async function () {
  await commands.selectShowtime(page);
});

When('I pick one free seat', async function () {
  await commands.pickFreeSeat(page);
});

When('I pick three free seats', async function () {
  await commands.pickMultipleSeats(page, 3);
});

When('I try to pick an occupied seat', async function () {
  await commands.pickOccupiedSeat(page);
});

When('I confirm my booking', async function () {
  await commands.confirmBooking(page);
});

Then('I should see a QR code', async function () {
  const qrCodeShown = await commands.checkQRCodePresence(page);
  expect(qrCodeShown).toBe(true);
});

Then('I shouldn\'t see a QR code', async function () {
  const qrCodeShown = await commands.checkQRCodePresence(page);
  expect(qrCodeShown).toBe(false);
});