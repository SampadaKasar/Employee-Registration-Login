let startTime;
let pauseTime = 0;
let timerInterval;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const stopBtn = document.getElementById('stopBtn');

function startTimer() {
  clearInterval(timerInterval);
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
  stopBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  pauseTime = Date.now() - startTime;
  startBtn.disabled = true;
  pauseBtn.disabled = true;
  resumeBtn.disabled = false;
  stopBtn.disabled = false;
}

function resumeTimer() {
  startTime = Date.now() - pauseTime;
  timerInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resumeBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  pauseTime = 0;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resumeBtn.disabled = true;
  stopBtn.disabled = true;

  // Calculate working time in hours, minutes, and seconds format
  //const totalTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
  //const hours = Math.floor(totalTimeInSeconds / 3600);
  //const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  //const seconds = totalTimeInSeconds % 60;
  //timerDisplay.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  updateTimer();
  timer.innerHTML = "Total Working Time: " + getTimeString(elapsedTimeInSeconds);
  
}

function updateTimer() {
  const elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
  const hours = Math.floor(elapsedTimeInSeconds / 3600);
  const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
  const seconds = elapsedTimeInSeconds % 60;
  timerDisplay.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
stopBtn.addEventListener('click', stopTimer);
