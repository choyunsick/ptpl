//변수설정
const txt = document.querySelector(".txt2");
const set1 = document.querySelector(".set1");
const set2 = document.querySelector(".set2");
const set3 = document.querySelector(".set3");
const boxes = document.querySelectorAll(".wrap>div");
const btns = document.querySelectorAll("#navi li");


console.log(boxes);
const len = boxes.length;
let posArr = [];

for(let el of boxes){
    posArr.push(el.offsetTop);
}
console.log(posArr);
posArr.push(boxes[len - 1].offsetTop + boxes[len - 1].offsetHeight);
console.log(posArr);


function init(){
    set1.style.transform = 'rotate(45deg)';
    set2.style.width = "0px";
    set3.style.transform = "scale(2)";
    set3.style.opacity = "0";
}

const customFuc = [
    function(scroll){
        init();
        set1.style.transform = `rotate(${45 + scroll / 5}deg) `;
    },
    function(scroll){
        init();
        let current_scroll = scroll - posArr[1];
        let current_scroll2 = current_scroll - 300;
        if(current_scroll >= 600) current_scroll = 600;
        set2.style.width = current_scroll + "px";
        let opa = (0 + current_scroll2 / 1000).toString();
        txt.style.opacity = opa;
    },
    function(scroll){
        init();
        let current_scroll = scroll - posArr[2];
        let scale = `scale( ${2 -current_scroll / 400} )`;
        set3.style.transform = scale;
        let opa = (0 + current_scroll / 400).toString();
        set3.style.opacity = opa;
    }]


window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    console.log(scroll);
    for(let el of btns) el.classList.remove("on");
    for(let i=0; i<len; i++){
        if(scroll >= posArr[i] && scroll < posArr[i + 1]){
            btns[i].classList.add("on");
            customFuc[i](scroll);
        }
    }
})

btns.forEach((el,index)=> { 
    el.addEventListener("click",()=>{
        window.scrollTo({top: posArr[index], behavior: "smooth"})
    })
})