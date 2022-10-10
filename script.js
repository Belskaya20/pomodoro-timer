let timerClock = null;
let start = document.getElementById('start');

function timer() {
start.addEventListener('click', function() {
}
)};

timeClock = setInterval(function () {
    let i = 0;
    document.getElementById("pomodoro-time").innerHTML = minute + " : " + sec;
        sec--;
        if (sec == 00) {
            minute--;
            sec = 60;
        if (minute == 0) {
            minute = 25;
            clearInterval(timerClock);
        }
    }
    if (sec <= 0 && minute <= 0) {
        clearInterval(timerClock);
    }
}, 1000);

function changeText () {
    if (this.start == "Start") { 
       this.start == "Stop";    
    } else {
       this.start == "Start";
    }
 }