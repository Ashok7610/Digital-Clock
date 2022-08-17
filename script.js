// console.log("hello guys");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours>12){
        hours = hours - 12;
        ampmEl.innerText = "PM";
    }

     hours = hours < 10 ? "0" + hours : hours;
     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds : seconds
    hourEl.innerText = hours;
    minuteEl.innerText = minutes;
    secondEl.innerText = seconds;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock()
// console.log(hours,minutes, seconds);