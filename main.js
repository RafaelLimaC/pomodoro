
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
    /* ----  variaveis do fundo ----- */

    fundoazul.addEventListener('click', function onClick(event) {
        const body = document.querySelectorAll('[data-body');
        body.forEach(body => body.classList.remove('roxo'));
        body.forEach(body => body.classList.remove('verde'));
        body.forEach(body => body.classList.add('azul'));
    });

    fundoroxo.addEventListener('click', function onClick(event) {
        const body = document.querySelectorAll('[data-body');
        body.forEach(body => body.classList.remove('azul'));
        body.forEach(body => body.classList.remove('verde'));
        body.forEach(body => body.classList.add('roxo'));
    });

    fundoverde.addEventListener('click', function onClick(event) {
        const body = document.querySelectorAll('[data-body');
        body.forEach(body => body.classList.remove('azul'));
        body.forEach(body => body.classList.remove('roxo'));
        body.forEach(body => body.classList.add('verde'));
    });

})()



