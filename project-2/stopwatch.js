// vvariables for btn
const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
console.log(resetBtn);
// variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;


//variable for leading zeros
let leadingSeconds = 0;
let leadingMinutes  = 0;
let leadingHours = 0;

// stop watch function
function stopWatch() {
        seconds++;
       if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    } 

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else {
        leadingSeconds = seconds;
    }
    if(minutes < 10) {
        leadingMinutes = "0" + munites.toString();
    }
    else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    }
    else {
        leadingHours = hours;
    }ss
    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
};

// 