
const { clickElement, getText } = require('./commands');
const puppeteer = require('puppeteer');

let page;

beforeEach(async () => {
	page = await browser.newPage();
	await page.setDefaultTimeout(50_000);
});

afterEach(() => {
	page.close();
});

describe('Ticket booking tests', () => {
	beforeEach(async () => {
		page = await browser.newPage();
		await page.goto('https://qamid.tmweb.ru/client/index.php');
	});

	test('Should successfully book one ticket', async () => {
		await clickElement(page, '.page-nav > a:nth-child(5)');
		await clickElement(page, 'a.movie-seances__time');
		await clickElement(page, '.buying-scheme__row > span:nth-child(8)');
		await clickElement(page, 'button.acceptin-button');
		await clickElement(page, 'button.acceptin-button');
		const actual = await getText(page, 'p.ticket__hint');
		expect(actual).toContain(
			'Покажите QR-код нашему контроллеру для подтверждения бронирования.');
		//await page.screenshot({ path: 'Screenshot/Booking1.png' });
	}, 80000);
	test('Should successfully book two tickets', async () => {
		await clickElement(page, '.page-nav > a:nth-child(5)');
		await clickElement(page, 'a.movie-seances__time');
		await clickElement(page, '.buying-scheme__row > span:nth-child(5)');
		await clickElement(page, '.buying-scheme__row > span:nth-child(6)');
		await clickElement(page, 'button.acceptin-button');
		await clickElement(page, 'button.acceptin-button');
		const actual = await getText(page, 'p.ticket__hint');
		expect(actual).toContain(
			'Покажите QR-код нашему контроллеру для подтверждения бронирования.');
		//await page.screenshot({ path: 'Screenshot/Booking2.png' });
	}, 80000);
	test('Should unsuccessful to book already booked ticket', async () => {
		await clickElement(page, '.page-nav > a:nth-child(5)');
		await clickElement(page, 'a.movie-seances__time');
		await clickElement(page, '.buying-scheme__row > span:nth-child(1)');
		expect(String(await page.$eval("button", (button) => {
		return button.disabled;}))).toContain("true");
		//await page.screenshot({ path: 'Screenshot/Booking3.png' });
	}, 80000);
});
