'use strict';

// Applying default Pomodoro settings on initialization
changeTime();

// Settings Events

settingButtonElement.addEventListener("click", showSettings);
exitButtonElement.addEventListener("click", showSettings);
backdropElement.addEventListener("click", showSettings);
submitButtonElement.addEventListener("click", showSettings);
submitButtonElement.addEventListener("click", getVal);

// Pomodoro Options Events

pomodoroButtonElement.addEventListener("click", pomodoro);
pomodoroButtonElement.addEventListener("click", changeTime);
shortBreakButtonElement.addEventListener("click", shortBreak);
shortBreakButtonElement.addEventListener("click", changeTime);
longBreakButtonElement.addEventListener("click", longBreak);
longBreakButtonElement.addEventListener("click", changeTime);

// Start Button Events

startButtonElement.addEventListener("click", startButton);
startButtonElement.addEventListener("click", turnTimerOnOff);

