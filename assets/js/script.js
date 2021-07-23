// Create empty object to hold the tasks
let tasks = {};
// startTime and endTime both in 24-hour clock
let startTime = 9 // hour that workday starts and first timeslot
let endTime = 18 // hour AFTER the last hour of the workday, if the workday ends at 17 (5PM), set endTime to 18 (6PM) 
// Add ability to click and edit tasks

// Select the paragraph element in the task wrapper 
$(".task-wrapper").on("click", function () {
    // Select paragraph that is a child of the task div and its text content
    let task = $(this).children("p");
    let text = task.text().trim();
    // Create text input area to enter new task 
    let textInput = $("<textarea>").addClass("task-text d-inline position-absolute").val(text);
    // Replace p element with textinput 
    task.replaceWith(textInput);
    // Make the cursor select the textinput 
    textInput.trigger("focus");
})
$(".task-wrapper").on("blur", "textarea", function () {
    // Grab task text
    const taskText = $(this).val().trim();
    // Recreate p tag
    let taskP = $("<p>").addClass("task-p").text(taskText);
    // Replace textarea with p
    $(this).replaceWith(taskP);
})
// Add ability to save tasks in local storage
$(".time-row").on("click", ".save-task", function () {
    // Grab timeslot that needs its task saved in the tasks array 
    const timeSlot = $(this).attr("id").replace("save", "task");
    // Grab text from the timeslot paragraph
    const taskText = $(this).closest(".row").find(".task-p").text().trim();
    // Update tasks object and save 
    tasks[timeSlot] = taskText;
    saveTasks();
    // Find the time for this task
    const taskTime = $(this).closest(".row").find(".time-wrap p").text().trim();
    // Tell the user that the task for the timeRow where the button was clicked has been saved 
    alert(`The task for ${taskTime} has been saved!`);
})
// Save task function 
const saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// Load task function 
const loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if there are no tasks, populate objects with the right keys and empty values
    if (!tasks) {
        tasks = { tasks9: "", tasks10: "", task11: "", task12: "", task1: "", task2: "", task3: "", task4: "", task5: "" };
    }
    // Iterate through the object by key and update static html 
    for (const task in tasks) {
        $("#" + task).find(".task-p").text(tasks[task]);
    }
    // Check background color of tasks upon loading webpage
    taskCheck();
}
// Function to change the color of the tasks background based on the approximate due-time
const taskCheck = function (task) {
    let hour = dayjs().hour();
    for (let i = startTime; i < endTime; i++) {
        let timeBox = $("#time-" + i).find(".task-wrapper");
        timeBox.removeClass("bg-secondary bg-danger bg-success");
        if (hour < i) {
            timeBox.addClass("bg-success");
        }
        else if (hour === i) {
            timeBox.addClass("bg-danger");
        }
        else {
            timeBox.addClass("bg-secondary");
        }
    }
}
// Function to clear all tasks 
$("#clear-tasks-btn").on("click", function() {
    // Confirm if the user wants to delete all tasks
    let confirm = window.confirm("Are you sure you want to clear all tasks?");
    if (confirm) {
        for(let i = startTime; i < endTime; i++) {
            // Find task for each time slot
            let task = $("#time-"+i).find(".task-p");
            // Clear the task text for each time slot
            task.text(""); 
            // Grab the timeslot and the taskText to save in the tasks object
            let timeSlot = $("#time-"+i).find(".task-wrapper").attr("id"); 
            let taskText = task.text().trim(); 
            tasks[timeSlot] = taskText; 
            // Save empty tasks object to localStorage
            saveTasks(); 
        }
    }
    else {
        return false;
    }
}); 

// Run taskCheck every 5 minutes to update task background color based on the time 
setInterval(function () {
    taskCheck();
}, (1000 * 60) * 5);


// Change bg-color of div containing tasks based on relation to current
loadTasks();

// Set current day on page
const currentDay = dayjs().format("dddd, MMMM, YYYY");
$("#currentDay").text(currentDay);

