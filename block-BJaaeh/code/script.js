let secondHand = document.querySelector(".second-hand");
let minuteHand = document.querySelector(".minute-hand");
let hourHand = document.querySelector(".hour-hand");

function tick() {

  let time = new Date();

  let seconds = time.getSeconds();
  let secondsInDeg = ((seconds / 60) * 360)+90;
  secondHand.style.transform = `rotate(${secondsInDeg}deg)`;

  let minutes = time.getMinutes();
  let minutesInDeg = ((minutes/60)*360)+90;
  minuteHand.style.transform = `rotate(${minutesInDeg}deg)`;

  let hour = time.getHours();
  let hourInDeg = ((hour/12)*360)+90;
  hourHand.style.transform = `rotate(${hourInDeg}deg)`;

  if(seconds  === 0){
    secondHand.style.transition = `all 0.01s`;
    secondHand.style.transitionTimingFunction = `cubic-bezier(1, 1, 0, -0.03)`;
  }else{
    secondHand.style.transition = `all 1s`;
    secondHand.style.transitionTimingFunction = `cubic-bezier(1, 1, 0, -0.03)`;
  }

  if(minutes === 0){
    minuteHand.style.transition = `all 0.01s`;
    minuteHand.style.transitionTimingFunction = `cubic-bezier(1, 1, 0, -0.03)`;
  }else{
    minuteHand.style.transition = `all 1s`;
    minuteHand.style.transitionTimingFunction = `cubic-bezier(1, 1, 0, -0.03)`;
  }

  if(hour  === 0){
    hourHand.style.transition = `all 0.01s`;
    hourHand.style.transitionTimingFunction = `cubic-bezier(1, 1, 0, -0.03)`;
  }else{
    hourHand.style.transition = `all 1s`;
    hourHand.style.transitionTimingFunction = `cubic-bezier(1, 1, 0, -0.03)`;
  }
//   console.log(seconds,minutes,hour);
}

setInterval(tick, 1000);
