
const { Given, When, Then, BeforeAll, AfterAll } = require('@cucumber/cucumber');
const { expect } = require('chai');
const puppeteer = require('puppeteer');

let browser, page;

BeforeAll(async function () {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  await page.setDefaultTimeout(30000);
});

AfterAll(async function () {
  await page.close();
  await browser.close();
});

Given('I am on the reservation page', async function () {
  await page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I select a seance time', async function () {
  await page.click('[class="movie-seances__time"]');
});

Then('I choose one available standard chair', async function () {
  await page.click(".acceptin-button");
});

Then('I confirm my selection twice', async function () {
  await page.click(".acceptin-button");
  await page.click(".acceptin-button");
});

Then('I see the QR code for confirmation', async function () {
  const actual = await page.$("[src='i/QR_code.png']");
    await expect(actual).not.toBeNull();
});


Given('I am on the reservation page', async function () {
  await page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I select a seance time', async function () {
  await page.click('[class="movie-seances__time"]');
});

Then('I choose three available standard chair', async function () {
  await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
  await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
  await page.click("[class='buying-scheme__chair buying-scheme__chair_standart']");
});

Then('I confirm my selection twice', async function () {
  await page.click(".acceptin-button");
  await page.click(".acceptin-button");
});

Then('I see the QR code for confirmation', async function () {
  const actual = await page.$("[src='i/QR_code.png']");
    await expect(actual).not.toBeNull();
});



Given('I am on the reservation page', async function () {
  await page.goto('https://qamid.tmweb.ru/client/index.php');
});

When('I select a seance time', async function () {
  await page.click('[class="movie-seances__time"]');
});

Then('I attempt to choose an already taken chair', async function () {
  await page.click("[class='buying-scheme__chair buying-scheme__chair_standart buying-scheme__chair_taken']");
});

Then('no QR code appears', async function () {
  const actual = await page.$("#non-existing-button");
    await expect(actual).toBe(null);
});

