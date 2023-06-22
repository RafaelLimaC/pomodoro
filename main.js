
(() => {
    /* ----- javascript para alternar abas ----- */
    const abas = document.querySelectorAll('[data-aba]');

    esconderConteudos = () =>   {
        const conteudos = document.querySelectorAll('[data-conteudo')
        conteudos.forEach(conteudo => conteudo.classList.add('hide'))
    }

    inativarAbas = () => {
        abas.forEach(aba => aba.classList.remove('ativa'))
    } 

    ativarConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)

        conteudo.classList.remove('hide')
    }

    ativarAba = (aba) => {
        aba.classList.add('ativa')
    }

    abas.forEach(aba => aba.addEventListener('click', () => {
        const valor = aba.dataset.aba

        esconderConteudos();
        inativarAbas();
        ativarAba(aba);
        ativarConteudo(valor);
    }))

    /*  --- javascript cor do fundo ---- */
    identificarBotao = () => {
        const idStyle1 = document.getElementById('style1');
        const idStyle2 = document.getElementById('style2');
        const idStyle3 = document.getElementById('style3');
        const body = document.getElementsByTagName('body')[0];

        idStyle1.addEventListener('click', () => { body.className = 'style1' });
        idStyle2.addEventListener('click', () => { body.className = 'style2' });
        idStyle3.addEventListener('click', () => { body.className = 'style3' });
    }

    identificarBotao();

})()


// começo do javascript do cronometro 
let timerIdPomodoro;
let timerIdIntervaloCurto;
let timerIdIntervaloLongo;

let isPausedPomodoro = true;
let isPausedIntervaloCurto = true;
let isPausedIntervaloLongo = true;

let tempoTotalPomodoro = 1500; // 25min em segundos
let tempoTotalIntervaloCurto = 300; // 5min em segundos
let tempoTotalIntervaloLongo = 900; // 15min em segundos

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

function resetTimer(totalTime, display, start, pause, reset, timerId) {
  clearInterval(timerId);
  totalTime = 60; // Valor inicial em segundos
  display.textContent = formatTime(totalTime);
  start.disabled = false;
  pause.disabled = true;
  reset.disabled = true;
}

startButtonPomodoro.addEventListener('click', startTimer(startButtonPomodoro, pauseButtonPomodoro, resetButtonPomodoro, tempoTotalPomodoro, timerPomodoro, isPausedPomodoro, timerIdPomodoro));
startButtonIntervaloCurto.addEventListener('click', startTimer(startButtonIntervaloCurto, pauseButtonIntervaloCurto, resetButtonIntervaloCurto, tempoTotalIntervaloCurto, timerIntervaloCurto, isPausedIntervaloCurto, timerIdIntervaloCurto));
startButtonIntervaloLongo.addEventListener('click', startTimer(startButtonIntervaloLongo, pauseButtonIntervaloLongo, resetButtonIntervaloLongo, tempoTotalIntervaloLongo, timerIntervaloLongo, isPausedIntervaloLongo, timerIdIntervaloLongo));

pauseButtonPomodoro.addEventListener('click', pauseTimer(isPausedPomodoro, startButtonPomodoro, pauseButtonPomodoro, timerIdPomodoro));
pauseButtonIntervaloCurto.addEventListener('click', pauseTimer(isPausedIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, timerIdIntervaloCurto));
pauseButtonIntervaloLongo.addEventListener('click', pauseTimer(isPausedIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, timerIdIntervaloLongo));

resetButtonPomodoro.addEventListener('click', resetTimer(tempoTotalPomodoro, timerPomodoro, startButtonPomodoro, pauseButtonPomodoro, resetButtonPomodoro, timerIdPomodoro));
resetButtonIntervaloCurto.addEventListener('click', resetTimer(tempoTotalIntervaloCurto, timerIntervaloCurto, startButtonIntervaloCurto, pauseButtonIntervaloCurto, resetButtonIntervaloCurto, timerIdIntervaloCurto));
resetButtonIntervaloLongo.addEventListener('click', resetTimer(tempoTotalIntervaloLongo, timerIntervaloLongo, startButtonIntervaloLongo, pauseButtonIntervaloLongo, resetButtonIntervaloLongo, timerIdIntervaloLongo));


