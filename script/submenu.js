
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");


btnCall.ontouch = function(e){
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMo.classList.toggle('on');
}
