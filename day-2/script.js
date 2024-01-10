const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const greeting = document.getElementById("greeting");

const todayDate = new Date();
const hour = todayDate.getHours();

let greet = "";

if (hour < 12) {
  greet = 'Good Morning';
}
else if (hour >= 12 && hour <= 17) {
  greet = 'Good Afternoon';
}
else if (hour >= 17 && hour <= 20) {
  greet = 'Good Evening';
}
else if (hour >= 20 && hour <= 24) {
  greet = 'Good Night';
}

greeting.innerHTML = `${greet}`;


const setTime = () => {
  const today = new Date();
  const seconds = today.getSeconds();
  const secondHandDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  
  const minutes = today.getMinutes();
  const minuteHandDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;

  const hours = today.getHours();
  const hourHandDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
};


setInterval(setTime, 1000);

setTime();
