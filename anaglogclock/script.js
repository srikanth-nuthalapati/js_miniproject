const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

const HoursEl = [];
const barEl = [];

for(let i=1;i<=12;i++){
    HoursEl.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin",HoursEl.join(""));
console.log(HoursEl);

for(let i=1;i<=60;i++){
    barEl.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin",barEl.join(""));

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");


function getCurrentTIme(){
    let date = new Date();

    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;

    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;

    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

getCurrentTIme();

setInterval(getCurrentTIme, 1000)