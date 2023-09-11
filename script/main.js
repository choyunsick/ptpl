const btnMetro = document.querySelectorAll("#metro nav a");
const boxMetro = document.querySelectorAll("#metro section");

btnMetro.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        e.preventDefault();

        //반복을 돌면서 btn의 on클래스를 모두 없애고
        for(let el of btnMetro)el.classList.remove("on");
        //클릭한 순번의 btn에 on을 붙이고
        btnMetro[index].classList.add("on");
        //반복을 돌면서 box의 on클래스를 모두 없애고
        for(let el of boxMetro)el.classList.remove("on");
        //클릭한 순번의 box에 on을 붙여보자~
        boxMetro[index].classList.add("on");

        // for(let el of boxMetro) el.classList.remove("active");
        // boxMetro[index].classList.add("active");

        setTimeout(()=>{
           for(let el of boxMetro) el.classList.remove("active");
           boxMetro[index].classList.add("active");
        },0)

    })
})



const frame = document.querySelector("#visual");
const panels = frame.querySelectorAll(".panel li");
const btns = frame.querySelectorAll(".btns li");
const btnPlay = frame.querySelector(".fa-play");
const btnStop = frame.querySelector(".fa-stop");
const bar = frame.querySelector(".bar");

const len = panels.length - 1;
let num = 0;
let timer = null;
const interval = 5000; 


startRolling();
btns.forEach((el, index) => {
    el.addEventListener("click", () => {
        active(index);
        stopRolling();
    });
})

btnPlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) {
        return;
    } else {
        startRolling();
    }
});

btnStop.addEventListener("click", stopRolling);
function startRolling() {
    bar.style.display = "block"; 
    setTimeout(progress, 0);  

    active(num);
    timer = setInterval(rolling, interval);

    btnPlay.classList.add("on");
    btnStop.classList.remove("on");
}

function stopRolling() {
    bar.style.display = "none";
    clearInterval(timer);
    btnStop.classList.add("on");
    btnPlay.classList.remove("on");
}

function active(index) {
    for (let el of panels) el.classList.remove("on");
    for (let el of btns) el.classList.remove("on");
    panels[index].classList.add("on");
    btns[index].classList.add("on");
    num = index;
    bar.style.width = "0%";
}

function rolling() {
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    active(num);
    progress();

}

function progress() {

    const init = parseInt(bar.style.width) || 0;
    const unit = "%";
    const startTime = performance.now();
    function animate(time) {
        const realTime = time - startTime;
        const prog = realTime / interval;
        const currentValue = init + 100 * prog;
        bar.style.width = `${currentValue}${unit}`;

        if (prog < 1) {
            requestAnimationFrame(animate);
        } else if (prog >= 1) {
            bar.style.width = "0%";
        }

    }
    requestAnimationFrame(animate);
}


