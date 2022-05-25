'use strict';

// Event Listeners

// Settings Events
settingButtonElement.addEventListener("click", showSettings);
exitButtonElement.addEventListener("click", showSettings);
backdropElement.addEventListener("click", showSettings);
submitButtonElement.addEventListener("click", showSettings);

// Pomodoro Options Events
pomodoroButtonElement.addEventListener("click", pomodoro);
shortBreakButtonElement.addEventListener("click", shortBreak);
longBreakButtonElement.addEventListener("click", longBreak);

// Start Button Events
startButtonElement.addEventListener("click", startButton);
