
function clickHandle(evt, animalName) {
let i, tabcontent, tablinks;

// Isso é pra limpar oq tava antes.
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}

// Isso é pra settar a tab como "ativa".
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Mostra a tab clicada e marca como ativa.
document.getElementById(animalName).style.display = "block";
evt.currentTarget.className += " active";
}
