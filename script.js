let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let hour = 0;
let secs = 0;
let mins = 0;

let timerId = null;

// Initialize the display on page load
timerDisplay.innerHTML = `00 : 00 : 00`;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 1000);  // Interval set to 1000ms (1 second)
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    // Reset the values and display immediately after reset
    hour = secs = mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;  // Show only hours:minutes:seconds
});

function startTimer() {
    secs++;  // Increment seconds every 1 second (1000ms)
    if (secs >= 60) {  // 60 seconds = 1 minute
        secs = 0;
        mins++;  // Increment minutes after 60 seconds
        if (mins >= 60) {  // 60 minutes = 1 hour
            mins = 0;
            hour++;  // Increment hours after 60 minutes
        }
    }

    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hourString = hour < 10 ? `0${hour}` : hour;

    timerDisplay.innerHTML = `${hourString} : ${minsString} : ${secsString}`;
}
