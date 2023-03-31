const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    timer = setInterval(() => {
      let timerSeconds = seconds % 60;
      let minuts = (seconds / 60) % 60;
      let hour = (seconds / 60 / 60) % 60;
      if (seconds === -1) {
        clearInterval(timer);
      } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(
          minuts
        )}:${timerSeconds}`;
        timerEl.innerHTML = strTimer;
      }
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  // Сбрасываем прошлый таймер, если он есть
  if (timer) clearInterval(timer);
  let seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
