const currentTime = new Date();

async function weather() {
  const apiKey = '08534ac244fcfd168c6f362552431a93';
  const lat = 39.998741;
  const lon = 116.469783;
  const weatherDb = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const weatherData = await (await weatherDb).json();
  currentTemp = weatherData.main.temp;
  temp.textContent = `${currentTemp}℃`;
}
weather();

const ampm = document.querySelector('.ampm');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const colon = document.querySelector('.colon');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const temp = document.querySelector('.temp');

const currentHour = currentTime.getHours();
const currentMin = currentTime.getMinutes();
const currentMonth = currentTime.getMonth();
const currentDay = currentTime.getDate();

ampm.textContent = currentHour >= 12 ? `PM` : `AM`;
hour.textContent = currentHour < 10 ? `0${currentHour}` : currentHour;
minute.textContent = currentMin < 10 ? `0${currentMin}` : currentMin;
month.textContent = currentMonth + 1;
day.textContent = currentDay;

setInterval(colonTimer, 1000);

function colonTimer() {
  colon.classList.toggle('hide');
}
