// Weather Functionality
const API_KEY = "81f6c197bcf1450c77f04fa150440ecb";
const fetchWeatherBtn = document.getElementById("get-weather-btn");
const cityInput = document.getElementById("city");
const weatherOutput = document.getElementById("weather-result");

fetchWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            weatherOutput.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} km/h</p>
            `;
        } catch (error) {
            weatherOutput.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    } else {
        weatherOutput.innerHTML = "<p>Please enter a city name.</p>";
    }
});

// Goal Setting CRUD Functionality
const addGoalBtn = document.getElementById("add-goal-btn");
const goalInput = document.getElementById("goal-input");
const goalList = document.getElementById("goal-list");

addGoalBtn.addEventListener("click", () => {
    const goal = goalInput.value.trim();
    if (goal) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${goal}</span>
            <button>Delete</button>
        `;
        goalList.appendChild(li);
        goalInput.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// To-Do List CRUD Functionality
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskCategory = document.getElementById("task-category");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    const category = taskCategory.value;
    if (task) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task} (${category})</span>
            <button>Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// Reminders CRUD Functionality
const addReminderBtn = document.getElementById("add-reminder-btn");
const reminderInput = document.getElementById("reminder-input");
const reminderTime = document.getElementById("reminder-time");
const reminderList = document.getElementById("reminder-list");

addReminderBtn.addEventListener("click", () => {
    const reminder = reminderInput.value.trim();
    const time = reminderTime.value;
    if (reminder && time) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${reminder} at ${time}</span>
            <button>Delete</button>
        `;
        reminderList.appendChild(li);
        reminderInput.value = "";
        reminderTime.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// Habit Tracker CRUD Functionality
const addHabitBtn = document.getElementById("add-habit-btn");
const habitInput = document.getElementById("habit-input");
const habitList = document.getElementById("habit-list");

addHabitBtn.addEventListener("click", () => {
    const habit = habitInput.value.trim();
    if (habit) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${habit}</span>
            <button>Delete</button>
        `;
        habitList.appendChild(li);
        habitInput.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// Health Tracker CRUD Functionality
const trackHealthBtn = document.getElementById("track-health-btn");
const stepsInput = document.getElementById("steps-input");
const caloriesInput = document.getElementById("calories-input");
const sleepInput = document.getElementById("sleep-input");
const healthList = document.getElementById("health-list");

trackHealthBtn.addEventListener("click", () => {
    const steps = stepsInput.value.trim();
    const calories = caloriesInput.value.trim();
    const sleep = sleepInput.value.trim();
    if (steps && calories && sleep) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>Steps: ${steps}, Calories: ${calories}, Sleep: ${sleep} hours</span>
            <button>Delete</button>
        `;
        healthList.appendChild(li);
        stepsInput.value = "";
        caloriesInput.value = "";
        sleepInput.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// Expense Tracker CRUD Functionality
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");

addExpenseBtn.addEventListener("click", () => {
    const name = expenseName.value.trim();
    const amount = expenseAmount.value.trim();
    if (name && amount) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${name}: $${amount}</span>
            <button>Delete</button>
        `;
        expenseList.appendChild(li);
        expenseName.value = "";
        expenseAmount.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// Calendar CRUD Functionality
const addEventBtn = document.getElementById("add-event-btn");
const calendarDate = document.getElementById("calendar-date");
const eventList = document.getElementById("event-list");

addEventBtn.addEventListener("click", () => {
    const date = calendarDate.value;
    if (date) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>Event on ${date}</span>
            <button>Delete</button>
        `;
        eventList.appendChild(li);
        calendarDate.value = "";
        li.querySelector("button").addEventListener("click", () => li.remove());
    }
});

// Pomodoro Timer Functionality
const startPomodoroBtn = document.getElementById("start-pomodoro-btn");
const resetPomodoroBtn = document.getElementById("reset-pomodoro-btn");
const timeLeft = document.getElementById("time-left");

let pomodoroInterval;
let time = 25 * 60; // 25 minutes in seconds

startPomodoroBtn.addEventListener("click", () => {
    clearInterval(pomodoroInterval);
    pomodoroInterval = setInterval(() => {
        if (time > 0) {
            time--;
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timeLeft.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
            clearInterval(pomodoroInterval);
            alert("Pomodoro session completed!");
        }
    }, 1000);
});

resetPomodoroBtn.addEventListener("click", () => {
    clearInterval(pomodoroInterval);
    time = 25 * 60;
    timeLeft.textContent = "25:00";
});
