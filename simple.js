let startTime;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
    const display = document.getElementById('display');
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function stopStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    updateDisplay();
}