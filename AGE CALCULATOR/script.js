const searchform = document.querySelector("#search-form");
const input = document.querySelector("#date");
const displayyear = document.querySelector("#displayyear");
const displaymonth = document.querySelector("#displaymonths");
const displayday = document.querySelector("#displaydays");

searchform.addEventListener("submit", (e) => {
  e.preventDefault();

  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.pitch = 0.9;
  speech.rate = 0.9;

  let inputdate = new Date(input.value);
  if (isNaN(inputdate)) return; // safeguard

  let d1 = inputdate.getDate();
  let m1 = inputdate.getMonth() + 1;
  let y1 = inputdate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

  if (d1 > d2) {
    d2 = d2 + monthDays[m2 - 2 < 0 ? 11 : m2 - 2];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  displayyear.innerText = y;
  displaymonth.innerText = m;
  displayday.innerText = d;

  speech.text = `Your age is ${y} years, ${m} months, and ${d} days`;
  window.speechSynthesis.speak(speech);
});
