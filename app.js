let date = new Date();

let hr = date.getHours();

let min = date.getMinutes();

let sec = date.getSeconds();

let display=(`${hr} : ${min} : ${sec}`); 





let timeDisplay = document.getElementById('timerow');
 
timeDisplay.innerHTML = display;


 