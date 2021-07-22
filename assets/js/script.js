// Create empty object to hold the tasks
let tasks = {};
// Add ability to click and edit tasks

// Select the paragraph element in the task wrapper 
$(".task-wrapper").on("click", function () {
    console.log("You clicked on a task!");
    // Select paragraph that is a child of the task div and its text content
    let task = $(this).children("p");
    let text = task.text().trim();
    // Create text input area to enter new task 
    let textInput = $("<textarea>").addClass("task-text d-inline position-absolute border border-danger").val(text);
    // Replace p element with textinput 
    task.replaceWith(textInput);
    // Make the cursor select the textinput 
    textInput.trigger("focus");


    // let task = $(this).children("p"); 
    // task.attr("contenteditable",true); 
})


$(".task-wrapper").on("blur", "textarea", function () {
    console.log("This will revert the textarea")
    // Grab task text
    const taskText = $(this).val().trim();
    // Recreate p tag
    let taskP = $("<p>").addClass("task-p").text(taskText);
    // Replace textarea with p
    $(this).replaceWith(taskP);

})

// Add ability to save tasks in local storage
$(".time-row").on("click", ".save-task", function () {
    checkId = $(this).attr("id");
    console.log(checkId);
    // Grab timeslot that needs its task saved in the tasks array 
    const timeSlot = $(this).attr("id").replace("save", "task");
    // Grab text from the timeslot paragraph
    const taskText = $(this).closest(".row").find(".task-p").text().trim();
    // Update task array 
    tasks[timeSlot] = taskText;
    console.log(tasks);
    saveTasks();
})

// Save task function 
const saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Load task function 
const loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    // if there are no tasks skip
    if (!tasks) {
        tasks = { tasks9: "", tasks10: "", task11: "", task12: "", task1: "", task2: "", task3: "", task4: "", task5: "" };
    }
    // Iterate through the object by key and update static html 
    for (const task in tasks) {
        $("#" + task).find(".task-p").text(tasks[task]);
    }
}

// Function to change the color of the tasks background based on the approximate due-time
const taskCheck = function (task) {
    // startTime and endTime both in 24-hour clock
    let startTime = 9 // hour that workday starts and first timeslot
    let endTime = 18 // hour AFTER the last hour of the workday, if the workday ends at 18 (6PM), set endTime to 19 (7PM) 
    let hour = dayjs().hour();
    for (let i = startTime; i < endTime; i++) {
        $("#time-" + i).find(".task-wrapper").removeClass("bg-light bg-success bg-warning bg-danger");
        if (hour < i ) {
            $("#time-" + i).find(".task-wrapper").addClass("bg-success"); 
        }
        else if (hour === i ) {
            $("#time-" + i).find(".task-wrapper").addClass("bg-warning");
        }
        else {
            $("#time-" + i).find(".task-wrapper").addClass("bg-danger");
        }
    }
}

setInterval(function() {
    taskCheck();
    console.log("I've updated!"); 
}, (1000*60)*5); 


// Change bg-color of div containing tasks based on relation to current
loadTasks();

// Set current day on page
const currentDay = dayjs().format("MM/DD/YYYY");
$("#currentDay").text(currentDay);

taskCheck();