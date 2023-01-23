const DEGREES_OF_CIRCLE = 360;
const SECONDS_PER_CIRCLE = 60;
const MINUTES_PER_CIRCLE = 60;
const HOURS_PER_CIRCLE = 12;
const INITIAL_DEGREES = 90;

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const timesNow = new Date();

  const seconds = timesNow.getSeconds();
  const secondsDegrees = (seconds / SECONDS_PER_CIRCLE) * DEGREES_OF_CIRCLE + INITIAL_DEGREES;
  secondHand.style.transform = `translate(73px, -1px) rotate(${secondsDegrees}deg)`;

  const mins = timesNow.getMinutes();
  const minsDegrees = (mins / MINUTES_PER_CIRCLE) * DEGREES_OF_CIRCLE + INITIAL_DEGREES;
  minHand.style.transform = `translate(85px, -1px) rotate(${minsDegrees}deg)`;

  const hours = timesNow.getHours();
  const hoursDegrees =
    hours > HOURS_PER_CIRCLE
      ? ((hours - HOURS_PER_CIRCLE) * DEGREES_OF_CIRCLE) / HOURS_PER_CIRCLE
      : (hours * DEGREES_OF_CIRCLE) / HOURS_PER_CIRCLE;

  hourHand.style.transform = `translate(103px, 0px) rotate(${hoursDegrees + INITIAL_DEGREES}deg)`;
  console.log(hours);
  console.log(hoursDegrees);
}

setInterval(setDate, 1000);
