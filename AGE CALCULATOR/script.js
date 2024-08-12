 
const searchform=document.querySelector("#search-form")
const input=document.querySelector("#date");
const displayyear=document.querySelector("#displayyear");
const displaymonth=document.querySelector("#displaymonths");
const displayday=document.querySelector("#displaydays");

searchform.addEventListener("submit",(e)=>{

e.preventDefault()

let speech=new SpeechSynthesisUtterance();
speech.lang="en-US"||"en-GB"||"en-UK";
speech.pitch=0.8;
speech.rate=0.8;



let inputdate=new Date(input.value);

let d1=inputdate.getDate();
let m1=inputdate.getMonth() + 1;
let y1=inputdate.getFullYear();


let date=new Date();

let d2 = date.getDate();
let m2 = 1 + date.getMonth();
let y2 = date.getFullYear();

let month=[31,28,31,30,31,30,31,31,30,31,30,31];

if(d1 > d2){

d2 = d2 + month[m2 - 1];
m2 = m2 - 1;

}

if(m1 > m2){

m2 = m2 + 12;
y2 = y2 - 1;



}


let d = d2 - d1;
let m = m2 - m1;
let y = y2 - y1;


displayyear.innerText=y;
displaymonth.innerText=m;
displayday.innerText=d;

speech.text=`your age is ${y} years ${m} months ${d} days`
window.speechSynthesis.speak(speech)

})

