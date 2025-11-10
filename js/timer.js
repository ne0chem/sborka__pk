const hourseBlock = document.querySelector(".timer__hours");
const minuteBlock = document.querySelector(".timer__minutes");
const secondBlock = document.querySelector(".timer__seconds");
const dayBlock = document.querySelector(".timer__day");

// Добавляем элементы для текста
const dayTextBlock = document.querySelector(".text__day");
const hoursTextBlock = document.querySelector(".text__hours");
const minutesTextBlock = document.querySelector(".text__minutes");
const secondsTextBlock = document.querySelector(".text__seconds");

let interval;

const nuwWord = (value, words) => {
  value = Math.abs(value) % 100;
  const lastNum = value % 10;

  if (lastNum === 1 && value !== 11) return words[0];
  if (lastNum >= 2 && lastNum <= 4 && (value < 10 || value > 20))
    return words[1];
  return words[2];
};

const updateTimer = () => {
  const date = new Date();
  const dateDeadline = new Date("24 November 2025").getTime();

  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const fDays = days < 10 ? "0" + days : days;
  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  dayBlock.textContent = fDays;
  hourseBlock.textContent = fHours;
  minuteBlock.textContent = fMinutes;
  secondBlock.textContent = fSeconds;

  if (dayTextBlock) {
    dayTextBlock.textContent = nuwWord(days, ["день", "дня", "дней"]);
  }
  if (hoursTextBlock) {
    hoursTextBlock.textContent = nuwWord(hours, ["час", "часа", "часов"]);
  }
  if (minutesTextBlock) {
    minutesTextBlock.textContent = nuwWord(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
  }
  if (secondsTextBlock) {
    secondsTextBlock.textContent = nuwWord(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
  }

  if (timeRemaining <= 0) {
    clearInterval(interval);
    hourseBlock.textContent = "00";
    minuteBlock.textContent = "00";
    secondBlock.textContent = "00";
  }
};

if (dayBlock && hourseBlock && minuteBlock && secondBlock) {
  updateTimer();
  interval = setInterval(updateTimer, 1000);
}
