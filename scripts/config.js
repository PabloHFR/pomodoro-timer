'use strict';

let isButtonClicked = false;

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
}