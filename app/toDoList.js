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
    button.innerHTML = '<i class="fa-solid fa-angles-up"></i>To do list';
  } else {
    div.style.display = 'block';
    button.innerHTML = '<i class="fa-solid fa-angles-down"></i>To do list';
  }
}