const container = document.querySelector('.todolist__button');

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('todolist__button') || event.target.classList.contains('fa-angles-down') || event.target.classList.contains('fa-angles-up')) {
    ativarToDoList(event.target);

  }
});

function ativarToDoList(element) {
  const button = element.closest('.todolist__button');
  const div = button.nextElementSibling;

  div.classList.toggle('accordion-ativo');
  if (div.style.display === 'block') {
    div.style.display = 'none';
    button.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>To do list';
  } else {
    div.style.display = 'block';
    button.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>To do list';
  }
}

/* javascript para inserir itens na lista */

const form = document.getElementById('novoItem');
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];

    const existe = itens.find( elemento => elemento.nome === nome.value);

    
    const itemAtual = {
        "nome": nome.value,
    }
    
    if (existe) {
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id)] = itemAtual;

    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
});
                            
function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const container = document.createElement('div');

    const numeroDoItem = document.createElement('strong');
    container.appendChild(numeroDoItem);

    container.appendChild(document.createTextNode(item.nome));

    novoItem.appendChild(container);

    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerText = "Deletar";

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    })
    return elementoBotao;
}

function deletaElemento(tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    localStorage.setItem("itens", JSON.stringify(itens));
}