const start=document.getElementById('Start');
const stop=document.getElementById('Stop');
const reset=document.getElementById('Reset');
const timer=document.getElementById('timer');

const p=document.getElementById('Timer');
let interval;
let timeLeft=1500;


function updateTimer(){
  let minutes= Math.floor(timeLeft/60);
  let seconds= timeLeft % 60;
  let formattedTime=`${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
  timer.innerHTML=formattedTime;
}

function Start() {
  interval=setInterval(() => {
    timeLeft--;
    updateTimer();
    if(timeLeft==0){
      clearInterval(interval);
      alert("Time's Up");
      timeLeft=1500;
      updateTimer();
    }
  },1000)
}

function Stop() {
 clearInterval(interval);
}

function Reset() {
timeLeft=1500;
clearInterval(interval);
updateTimer();
}



start.addEventListener("click",Start);
stop.addEventListener("click",Stop);
reset.addEventListener("click",Reset);
  