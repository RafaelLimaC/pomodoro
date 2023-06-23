let timerIdPomodoro;
let timerIdIntervaloCurto;
let timerIdIntervaloLongo;

let timerPropertiesPomodoro = {
  isPaused: true,
  totalTime: 1500,
  timerId: null // 25min em segundos
};

let timerPropertiesIntervaloCurto = {
  isPaused: true,
  totalTime: 300,
  timerId: null // 5min em segundos
};

let timerPropertiesIntervaloLongo = {
  isPaused: true,
  totalTime: 900,
  timerId: null // 15min em segundos
};

const valorInicialPomodoro = 1500;
const valorInicialIntervaloCurto = 300;
const valorInicialIntervaloLongo = 900;

const timerPomodoro = document.getElementById('timer-pomodoro');
const timerIntervaloCurto = document.getElementById('timer-intervalo-curto');
const timerIntervaloLongo = document.getElementById('timer-intervalo-longo');

const startButtonPomodoro = document.getElementById('startButton-pomodoro');
const startButtonIntervaloCurto = document.getElementById('startButton-intervalo-curto');
const startButtonIntervaloLongo = document.getElementById('startButton-intervalo-longo');

const pauseButtonPomodoro = document.getElementById('pauseButton-pomodoro');
const pauseButtonIntervaloCurto = document.getElementById('pauseButton-intervalo-curto');
const pauseButtonIntervaloLongo = document.getElementById('pauseButton-intervalo-longo');

const resetButtonPomodoro = document.getElementById('resetButton-pomodoro');
const resetButtonIntervaloCurto = document.getElementById('resetButton-intervalo-curto');
const resetButtonIntervaloLongo = document.getElementById('resetButton-intervalo-longo');

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

function startTimer(timerProperties, start, pause, reset, display, timerId) {
  timerProperties.isPaused = false;
  
  start.disabled = true;
  pause.disabled = false;
  reset.disabled = false;

  timerProperties.timerId = setInterval(function () {
    timerProperties.totalTime--;
    display.textContent = formatTime(timerProperties.totalTime);
    if (timerProperties.totalTime <= 0) {
      clearInterval(timerId);
      start.disabled = false;
      pause.disabled = true;
      reset.disabled = true;
    }
  }, 1000);
}

function pauseTimer(timerProperties, start, pause, timerId) {
  timerProperties.isPaused = true;
  clearInterval(timerProperties.timerId);
  start.disabled = false;
  pause.disabled = true;
}

function resetTimer(timerProperties, display, start, pause, reset, timerId, initialValue) {
  clearInterval(timerProperties.timerId);
  timerProperties.totalTime = initialValue;
  display.textContent = formatTime(timerProperties.totalTime);
  start.disabled = false;
  pause.disabled = true;
  reset.disabled = true;
}

function iniciarTimer(e) {
  e.preventDefault();
  if (e.target.id === 'startButton-pomodoro') {
    startTimer(timerPropertiesPomodoro, startButtonPomodoro, pauseButtonPomodoro, resetButtonPomodoro, timerPomodoro, timerIdPomodoro);
  } 
  if (e.target.id === 'startButton-intervalo-curto') {
    startTimer(timerPropertiesIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, resetButtonIntervaloCurto, timerIntervaloCurto, timerIdIntervaloCurto);
  } 
  if (e.target.id === 'startButton-intervalo-longo') {
    startTimer(timerPropertiesIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, resetButtonIntervaloLongo, timerIntervaloLongo, timerIdIntervaloLongo);
  }
}

function ativarPause(e) {
  e.preventDefault();
  if (e.target.id === 'pauseButton-pomodoro') {
    pauseTimer(timerPropertiesPomodoro, startButtonPomodoro, pauseButtonPomodoro, timerIdPomodoro);
  } 
  if (e.target.id === 'pauseButton-intervalo-curto') {
    pauseTimer(timerPropertiesIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, timerIdIntervaloCurto);
  } 
  if (e.target.id === 'pauseButton-intervalo-longo') {
    pauseTimer(timerPropertiesIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, timerIdIntervaloLongo);
  }
}

function ativarReset(e) {
  e.preventDefault();
  if (e.target.id === 'resetButton-pomodoro') {
    resetTimer(timerPropertiesPomodoro, timerPomodoro, startButtonPomodoro, pauseButtonPomodoro, resetButtonPomodoro, timerIdPomodoro, valorInicialPomodoro);
  } 
  if (e.target.id === 'resetButton-intervalo-curto') {
    resetTimer(timerPropertiesIntervaloCurto, timerIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, resetButtonIntervaloCurto, timerIdIntervaloCurto, valorInicialIntervaloCurto);
  } 
  if (e.target.id === 'resetButton-intervalo-longo') {
    resetTimer(timerPropertiesIntervaloLongo, timerIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, resetButtonIntervaloLongo, timerIdIntervaloLongo, valorInicialIntervaloLongo);
  }
}

// teste

startButtonPomodoro.addEventListener('click', iniciarTimer);
startButtonIntervaloCurto.addEventListener('click', iniciarTimer);
startButtonIntervaloLongo.addEventListener('click', iniciarTimer);

pauseButtonPomodoro.addEventListener('click', ativarPause);
pauseButtonIntervaloCurto.addEventListener('click', ativarPause);
pauseButtonIntervaloLongo.addEventListener('click', ativarPause);

resetButtonPomodoro.addEventListener('click', ativarReset);
resetButtonIntervaloCurto.addEventListener('click', ativarReset);
resetButtonIntervaloLongo.addEventListener('click', ativarReset);
