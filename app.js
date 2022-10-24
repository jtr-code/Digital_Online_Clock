
function dynamicTime() {

    let date = new Date();

    let hr = date.getHours();

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let display = (`${hr} : ${min} : ${sec}`);

    document.getElementById('timerow').innerHTML = display;

    console.log(display);

}

setInterval("dynamicTime()",1000);


function dynamicDate() {
    
    let date = new Date();

    let day = date.getDay();

    let month = date.getMonth();

    let year = date.getFullYear();

    let displayDate = (`${day} / ${month} / ${year}`);

    document.getElementById('daterow').innerHTML = displayDate;

    console.log(displayDate);
}

setInterval("dynamicDate()", 1000);

