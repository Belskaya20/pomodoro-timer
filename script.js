let timerClock = null;
let start = document.getElementById('start');
let timerId = document.getElementById('pomodoro-time');

function timer() {
    start.addEventListener('click', function () {
        start.textContent == 'Start' ? 'Stop' : 'Start';

        if (start.textContent === "Stop") {
            clearInterval(timerClock);
        }

        timerClock = setInterval(function () {
            let sec = timerId.textContent.split(":")[1];
            let minute = timerId.textContent.split(":")[0];
            document.getElementById('pomodoro-time').innerHTML = `${minute}:${sec}`;
            let i = 0;
            let ssec = '' + sec;
            if (ssec.length < 2) {
                ssec = '0' + ssec;
            }

            let min = '' + minute;
            if (min.length < 2) {
                min = '0' + min;
            }

            if (sec > 0) {
                sec -= 1;
            } else if (minute > 0) {
                minute -= 1;
                sec = 59;
            }

            if (sec <= 0 && minute <= 0) {
                clearInterval(timerClock);
            }

            document.getElementById("pomodoro-time").innerHTML = minute + " : " + sec;
        }, 1000);
    }
    )
};
timer();