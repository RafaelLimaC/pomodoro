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
