const gotoReservationPage = async (page) => {
  await page.goto('https://qamid.tmweb.ru/client/index.php');
};

const selectShowtime = async (page) => {
  await page.click('.movie-seances__time');
};

const pickFreeSeat = async (page) => {
  await page.click('.buying-scheme__chair.buying-scheme__chair_standart');
};

const pickMultipleSeats = async (page, numSeats) => {
  for (let i = 0; i < numSeats; i++) {
    await pickFreeSeat(page);
  }
};

const confirmBooking = async (page) => {
  await page.click('.acceptin-button');
  await page.click('.acceptin-button');
};

const checkQRCodePresence = async (page) => {
  const qrCode = await page.$('[src="i/QR_code.png"]');
  return qrCode !== null;
};

const pickOccupiedSeat = async (page) => {
  await page.click('.buying-scheme__chair.buying-scheme__chair_taken');
};

module.exports = {
  gotoReservationPage,
  selectShowtime,
  pickFreeSeat,
  pickMultipleSeats,
  confirmBooking,
  checkQRCodePresence,
  pickOccupiedSeat,
};