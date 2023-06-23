let timerIdPomodoro;
let timerIdIntervaloCurto;
let timerIdIntervaloLongo;

let isPausedPomodoro = true;
let isPausedIntervaloCurto = true;
let isPausedIntervaloLongo = true;

let tempoTotalPomodoro = 1500; // 25min em segundos
let tempoTotalIntervaloCurto = 300; // 5min em segundos
let tempoTotalIntervaloLongo = 900; // 15min em segundos

const valorInicialPomodoro = 1500;
const valorInicialIntervaloCurto = 1500;
const valorInicialIntervaloLongo = 1500;

const timerPomodoro =       document.getElementById('timer-pomodoro');
const timerIntervaloCurto = document.getElementById('timer-intervalo-curto');
const timerIntervaloLongo = document.getElementById('timer-intervalo-longo');

const startButtonPomodoro =         document.getElementById('startButton-pomodoro');
const startButtonIntervaloCurto =   document.getElementById('startButton-intervalo-curto');
const startButtonIntervaloLongo =   document.getElementById('startButton-intervalo-longo');

const pauseButtonPomodoro =         document.getElementById('pauseButton-pomodoro');
const pauseButtonIntervaloCurto =   document.getElementById('pauseButton-intervalo-curto');
const pauseButtonIntervaloLongo =   document.getElementById('pauseButton-intervalo-longo');

const resetButtonPomodoro =         document.getElementById('resetButton-pomodoro');
const resetButtonIntervaloCurto =   document.getElementById('resetButton-intervalo-curto');
const resetButtonIntervaloLongo =   document.getElementById('resetButton-intervalo-longo');

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

function startTimer(start, pause, reset, tempoTotal, display, isPaused, timerId) {
  isPaused = false;
  start.disabled = true;
  pause.disabled = false;
  reset.disabled = false;
  
  timerId = setInterval(function() {
    tempoTotal--;
    display.textContent = formatTime(tempoTotal);
    if (tempoTotal <= 0) {
      clearInterval(timerId);
      start.disabled = false;
      pause.disabled = true;
      reset.disabled = true;
    }
  }, 1000);
}

function pauseTimer(isPaused, start, pause, timerId) {
  isPaused = true;
  clearInterval(timerId);
  start.disabled = false;
  pause.disabled = true;
}

function resetTimer(totalTime, display, start, pause, reset, timerId, valorInicial) {
  clearInterval(timerId);
  totalTime = valorInicial;
  display.textContent = formatTime(totalTime);
  start.disabled = false;
  pause.disabled = true;
  reset.disabled = true;
}

function iniciarTimer(e) {
  if (e.target.id === 'startButton-pomodoro') {
    startTimer(startButtonPomodoro, pauseButtonPomodoro, resetButtonPomodoro, tempoTotalPomodoro, timerPomodoro, isPausedPomodoro, timerIdPomodoro);
  } 
  if (e.target.id === 'startButton-intervalo-curto') {
    startTimer(startButtonIntervaloCurto, pauseButtonIntervaloCurto, resetButtonIntervaloCurto, tempoTotalIntervaloCurto, timerIntervaloCurto, isPausedIntervaloCurto, timerIdIntervaloCurto);
  } 
  if (e.target.id === 'startButton-intervalo-longo') {
    startTimer(startButtonIntervaloLongo, pauseButtonIntervaloLongo, resetButtonIntervaloLongo, tempoTotalIntervaloLongo, timerIntervaloLongo, isPausedIntervaloLongo, timerIdIntervaloLongo);
  }
}

function ativarPause(e) {
  if (e.target.id === 'pauseButton-pomodoro') {
    pauseTimer(isPausedPomodoro, startButtonPomodoro, pauseButtonPomodoro, timerIdPomodoro);
  } 
  if (e.target.id === 'pauseButton-intervalo-curto') {
    pauseTimer(isPausedIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, timerIdIntervaloCurto)
  } 
  if (e.target.id === 'pauseButton-intervalo-longo') {
    pauseTimer(isPausedIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, timerIdIntervaloLongo);
  }
}

function ativarReset(e) {
  if (e.target.id === 'pauseButton-pomodoro') {
    resetTimer(tempoTotalPomodoro, timerPomodoro, startButtonPomodoro, pauseButtonPomodoro, resetButtonPomodoro, timerIdPomodoro, valorInicialPomodoro);
  } 
  if (e.target.id === 'pauseButton-intervalo-curto') {
    resetTimer(tempoTotalIntervaloCurto, timerIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, resetButtonIntervaloCurto, timerIdIntervaloCurto, valorInicialIntervaloCurto);
  } 
  if (e.target.id === 'pauseButton-intervalo-longo') {
    resetTimer(tempoTotalIntervaloLongo, timerIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, resetButtonIntervaloLongo, timerIdIntervaloLongo, valorInicialIntervaloLongo);
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
