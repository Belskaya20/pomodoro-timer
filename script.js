let timerClock = null;
let start = document.querySelector('#start');
let timerId = document.getElementById('pomodoro-time');

function timer() {
    start.addEventListener('click', function () {
        start = (start == 'Start' ? 'Stop' : 'Start');
        timerClock = setInterval(function () {
        let sec = timerId.textContent.split(":")[1];
        let minute = timerId.textContent.split(":")[0];
        document.getElementById('pomodoro-time').innerHTML = `${minute}:${sec}`;
        let i = 0;
        if (sec > 0) {
            sec -= 1;
        } else if (minute > 0) {
            minute -= 1;
            sec = 59;
            clearInterval(timerClock);
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