//변수설정
const boxes = document.querySelectorAll(".wrap>div");
const btns = document.querySelectorAll("#navi li");
const obj1 = document.querySelector(".obj1");
const obj2 = document.querySelector(".obj2");
const obj3 = document.querySelector(".obj3");
const txt = document.querySelector(".txt2");
console.log(boxes);
const len = boxes.length;
let posArr = [];

for(let el of boxes){
    posArr.push(el.offsetTop);
}
console.log(posArr);//[0, 1300, 3300] 
posArr.push(boxes[len - 1].offsetTop + boxes[len - 1].offsetHeight);
console.log(posArr);//[0, 1300, 3300, 4800]


//초기화 함수
function init(){
    obj1.style.transform = 'rotate(45deg)';
    obj2.style.width = "0px";
    // obj2.style.opacity = "0";
    obj3.style.transform = "scale(2)";
    obj3.style.opacity = "0";
}

const customFuc = [
    function(scroll){
        init();
        obj1.style.transform = `rotate(${45 + scroll / 5}deg) `;
    },
    function(scroll){
        init();
        let current_scroll = scroll - posArr[1];
        let current_scroll2 = current_scroll - 300;
        if(current_scroll >= 600) current_scroll = 600;
        obj2.style.width = current_scroll + "px";
        //opacity적용
        let opa = (0 + current_scroll2 / 1000).toString();
        txt.style.opacity = opa;
    },
    function(scroll){
        init();
        let current_scroll = scroll - posArr[2];
        let scale = `scale( ${2 -current_scroll / 400} )`;
        obj3.style.transform = scale;
        let opa = (0 + current_scroll / 400).toString();
        obj3.style.opacity = opa;
    }]


window.addEventListener("scroll",()=>{
    let scroll = window.scrollY;
    console.log(scroll);
    for(let el of btns) el.classList.remove("on");
    for(let i=0; i<len; i++){
        if(scroll >= posArr[i] && scroll < posArr[i + 1]){
            btns[i].classList.add("on");
            customFuc[i](scroll);
            //해당 스크롤Y값을 매개변수로 넣어줌
        }
    }
})

//버튼을 클릭했을때 섹션간 이동하도록 코드를 만들어보세요
btns.forEach((el,index)=> { 
    el.addEventListener("click",()=>{
        window.scrollTo({top: posArr[index], behavior: "smooth"})
    })
})