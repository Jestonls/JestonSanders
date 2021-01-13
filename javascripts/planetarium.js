
var d = new Date();

var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
solarsystem = [
  {day:"0" , foreground:"<img src='../images/sun.png' />", background:"<img src='../images/a.png' />"},
  {day:"1" , foreground:"<img src='../images/moon.png' />", background:"<img src='../images/a.png' />"},
  {day:"2" , foreground:"<img src='../images/mars.png' />", background:"<img src='../images/c.png' />"},
  {day:"3" , foreground:"<img src='../images/mercury.png' />", background:"<img src='../images/a.png' />"},
  {day:"4" , foreground:"<img src='../images/jupiter.png' />", background:"<img src='../images/g.png' />"},
  {day:"5" , foreground:"<img src='../images/venus.png' />", background:"<img src='../images/f.png' />"},
  {day:"6" , foreground:"<img src='../images/saturn2.png' />", background:"<img src='../images/b.png'/>"},
];

console.log(day[d.getDay()]);

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

console.log(d.getHours());

console.log(month[d.getMonth()]);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.toLocaleDateString());

//change default 24 hour time form to 12 hour time
var hour = (d.getHours());

console.log(hour);

var amPm = " ";
if (hour >= 11){
  amPm = " pm";}
else {
  amPm = " am";}
if (hour === 0){
  hour = 12;}
else if (hour >= 13){
  hour = hour - 12;}

console.log(hour);


var n = day[d.getDay()];
var m = month[d.getMonth()];
console.log(month[d.getMonth()]);

var min = d.getMinutes();
var sec = d.getSeconds();

function getStylesheet() {
  var currentDay = new Date().getDay();
  var background = document.getElementById('dayL');  
  var foreground = document.getElementById('dayM');  
  console.log(currentDay);
  console.log(solarsystem["0"].day);
  var names = " ";
  for(var i=0; i<day.length; i++) {
    document.getElementsByClassName("changeD")[i].onmouseover = function() {
    this.style.color = "red";
  
  for (let f = 0; f < solarsystem.length; f++) {   
  if (this.name === solarsystem[f].day) {
    background.innerHTML = solarsystem[f].background;
    foreground.innerHTML = solarsystem[f].foreground;

  }
  }
}

document.getElementsByClassName("changeD")[i].onmouseout = function() 
{
this.style.color = "black";  
console.log('work');
  background.innerHTML = solarsystem[currentDay].background;
  foreground.innerHTML = solarsystem[currentDay].foreground;
}
};
}

getStylesheet();
