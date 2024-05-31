var min = 0;
var sec = 0;
var milisec = 0;

var minH = document.getElementById('minH');
var secH = document.getElementById('secH');
var milisecH = document.getElementById('milisecH');

var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');


function timer() {
    milisec++
    milisecH.innerHTML = milisec;
    if (milisec >= 100) {
        sec++
        secH.innerHTML = sec;
        milisec = 0;
    }  
    if (sec >= 60) {
        min++
        minH.innerHTML = min;
        sec = 0
    }
}

pauseBtn.disabled = true; 
resetBtn.disabled = true;

function start() {
    interval = setInterval(timer, 10);
    startBtn.disabled = true;
    startBtn.innerHTML = 'Start'
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
}

function pause() {
    clearInterval(interval)
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    startBtn.innerHTML = 'Resume';
}

function reset() {
    min = 0; 
    sec = 0; 
    milisec = 0; 
    minH.innerHTML = min; 
    secH.innerHTML = sec; 
    milisecH.innerHTML = milisec;
    pause()
    startBtn.innerHTML = 'Start';
    pauseBtn.disabled = true; 
    resetBtn.disabled = true; 
}


startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
resetBtn.addEventListener('click', reset)
