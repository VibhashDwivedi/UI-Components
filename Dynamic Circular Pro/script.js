
const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;

  const progressText = document.getElementById('progress-text');
  progressText.textContent = `${Math.round(percent)}%`;

}

var x= 32;
var y= 42;
var per = (x/y)*100;
setProgress(per); 