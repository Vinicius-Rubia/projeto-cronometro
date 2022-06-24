const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const stopBtn = document.querySelector('.stop-btn');
let seconds = 0;
let minutes = 0;
let hour = 0;
let interval;

function twoDigits(digit) {
    if(digit < 10) {
        return(`0${digit}`);
    } else {
        return(digit);
    }
}

function timerStart() {
    counterTemp();
    interval = setInterval(counterTemp, 1000);
}

function timerPause() {
    clearInterval(interval);
}

function timerStop() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hour = 0;
    document.getElementById('timer').innerText = '00:00:00';
}

function counterTemp() {
    seconds++;
    if(seconds == 60) {
        minutes++;
        seconds = 0;
        if(minutes == 60) {
            minutes = 0;
            hour++;
        }
    }
    document.getElementById('timer').innerText = `${twoDigits(hour)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

startBtn.addEventListener('click', timerStart);
pauseBtn.addEventListener('click', timerPause);
stopBtn.addEventListener('click', timerStop);