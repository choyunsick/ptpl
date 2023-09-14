
const cctvCall = document.querySelector(".cctvCall");
const menuMo = document.querySelector(".menuMo");


cctvCall.onclick = function(e){
    e.preventDefault();
    cctvCall.classList.toggle("on");
    menuMo.classList.toggle('on');
}
