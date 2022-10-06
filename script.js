let timerId = document.getElementById('pomodoro-time');
let timerClock = setInterval(timerId);
let start = document.getElementById('start');


function timer() {
    start.addEventListener('click', function() {
        let i = 0;
        let minute = 25;
        let sec = 60;
        setInterval(function () {
            document.getElementById("pomodoro-time").innerHTML = minute + " : " + sec;
            sec--;
            if (sec == 00) {
                minute--;
                sec = 60;
            if (minute == 0) {
                minute = 25;
            }
            if(sec || minute <= 0) {
                clearInterval(timerClock);
            }
        }
    }, 1000);
});
};

function changeText () {
    if (this.start == "Start") { 
       this.start == "Stop";    
    } else {
       this.start == "Start";
    }
 }