
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
let timerId;
let totalTime = 60; // Valor inicial em segundos
let isPaused = true;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  isPaused = false;
  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  
  timerId = setInterval(function() {
    totalTime--;
    timerDisplay.textContent = formatTime(totalTime);
    if (totalTime <= 0) {
      clearInterval(timerId);
      startButton.disabled = false;
      pauseButton.disabled = true;
      resetButton.disabled = true;
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timerId);
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerId);
  totalTime = 60; // Valor inicial em segundos
  timerDisplay.textContent = formatTime(totalTime);
  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);