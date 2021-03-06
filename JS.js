var bouton = document.querySelector ('.bouton');
var nav = document.querySelector ('.nav');

bouton.onclick = function (){
    nav.classList.toggle ('ouvertureNav');
}

var bouton1 = document.querySelector ('.bouton1');
var white = document.querySelector ('.black');


bouton1.onclick = function(){
    white.classList.toggle ('White');
}

