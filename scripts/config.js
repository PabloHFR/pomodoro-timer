'use strict';

// ****** Variable Declarations ******

// Turn On/Off boolean variables
let isButtonClicked = false;
let isTurnedOn;

// Get time input from settings
let pomodoroTimeInput = +pomodoroTimeInputElement.value;
let shortBreakTimeInput = +shortBreakTimeInputElement.value;
let longBreakTimeInput = +longBreakTimeInputElement.value;

// Holds seconds for the countdown
let timeInput;

// ****** Change Style Functions ******

function pomodoro() {
    // Start Button
    startButtonElement.classList.remove("start-btn-active");
    startButtonElement.textContent = "Start";

    // Button Effect and Message
    shortBreakButtonElement.classList.remove("active");
    longBreakButtonElement.classList.remove("active");
    pomodoroButtonElement.classList.add("active");
    messageElement.textContent = "Time to Focus!";

    // Background-color and Start Button Color
    document.body.classList.remove("short-break");
    document.body.classList.remove("long-break");
    document.body.classList.add("pomodoro");
    startButtonElement.style.color = "var(--pomodoroColor)";
};

function shortBreak() {
    // Start Button
    startButtonElement.classList.remove("start-btn-active");
    startButtonElement.textContent = "Start";

    // Button Effect and Message
    pomodoroButtonElement.classList.remove("active");
    longBreakButtonElement.classList.remove("active");
    shortBreakButtonElement.classList.add("active");
    messageElement.textContent = "Time for a Break!";

    // Background-color and Start Button Color
    document.body.classList.remove("pomodoro");
    document.body.classList.remove("long-break");
    document.body.classList.add("short-break");
    startButtonElement.style.color = "var(--shortBreakColor)";
};

function longBreak() {
    // Start Button
    startButtonElement.classList.remove("start-btn-active");
    startButtonElement.textContent = "Start";

    // Button Effect and Message
    pomodoroButtonElement.classList.remove("active");
    shortBreakButtonElement.classList.remove("active");
    longBreakButtonElement.classList.add("active");
    messageElement.textContent = "Time for a Break!";

    // Background-color and Start Button Color
    document.body.classList.remove("short-break");
    document.body.classList.remove("pomodoro");
    document.body.classList.add("long-break");
    startButtonElement.style.color = "var(--longBreakColor)";

};

function startButton() {
    startButtonElement.classList.toggle("start-btn-active");

    if (startButtonElement.textContent === "Start") {
        startButtonElement.textContent = "Stop";
        isButtonClicked = true;
    } else {
        startButtonElement.textContent = "Start";
        isButtonClicked = false;
    }
};

// ****** Show Settings Function ******

function showSettings() {
    configurationOverlayElement.classList.toggle("hidden");
    backdropElement.classList.toggle("hidden");
};

// ****** Timer Functions ******

function getVal() { // Gets setted values and updates timer
    pomodoroTimeInput = +pomodoroTimeInputElement.value
    shortBreakTimeInput = +shortBreakTimeInputElement.value;
    longBreakTimeInput = +longBreakTimeInputElement.value;
    changeTime();
};

function changeTime() { // Changes timer and page style based on Pomodoro Option
    clearInterval(isTurnedOn);
    isTurnedOn = ""; // Turns isTurnedOn to False
    if (pomodoroButtonElement.classList.contains("active")) {
        timeElement.textContent = String(pomodoroTimeInput).padStart(2, "0") + ":00"
    } else if (shortBreakButtonElement.classList.contains("active")) {
        timeElement.textContent = String(shortBreakTimeInput).padStart(2, "0") + ":00"
    } else if (longBreakButtonElement.classList.contains("active")) {
        timeElement.textContent = String(longBreakTimeInput).padStart(2, "0") + ":00"
    }
};

function timer() { // Convert, display and reset time when it reaches 00:00
    let minutes = Math.floor(timeInput / 60);
    let seconds = timeInput % 60;
    timeElement.textContent = (String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0"));
    timeInput--;

    if (timeElement.textContent === "00:00") {
        clearInterval(isTurnedOn);
        startButton();
        getVal();
    }
};

function turnTimerOnOff() {
    if (!isTurnedOn) { // Turns timer countdown on if isTurnedOn === False
        if (pomodoroButtonElement.classList.contains("active")) {
            timeInput = pomodoroTimeInput * 60;
        } else if (shortBreakButtonElement.classList.contains("active")) {
            timeInput = shortBreakTimeInput * 60;
        } else if (longBreakButtonElement.classList.contains("active")) {
            timeInput = longBreakTimeInput * 60;
        }
        timer(); // Called because of existing trigger delay on SetInterval()
        isTurnedOn = setInterval(timer, 1000);
    } else { // Turns timer countdown off if isTurnedOn === True
        clearInterval(isTurnedOn);
        isTurnedOn = "";
    }
};
