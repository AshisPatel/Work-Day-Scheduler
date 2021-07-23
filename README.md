# Work Day Scheduler - Week 5 Challenge

## Purpose

![Adding some tasks to the work day scheduler and showing functions of save and clear all buttons]() 

The Work Day Scheduler is a simple task tracker that lets you add track tasks for a standrad 9AM-5PM workday! The work day scheduler is intended for use on standard monitors, or larger. 

## Function

The work day scheduler lets you type in tasks by converting the center-column into a text input. Once the text input is clicked out of, or any other interaction occurs on the web page, the text input is converted back to a static paragraph element. New tasks can be saved by clicking on the "save task button" in the right-column. An alert will display upon button click to let the user know the task for the time slot was saved. 

Tasks are color-coded based on comparing the left-column's hour to the current hour, using the 24-hour clock as a basis. The center column color guide is as follows: *grey* for tasks in the *past*, *red* for tasks in the *present*, and *green* for tasks in the *future*. Every five minutes, the webpage will check the hour and update the task backgrounds appropriately. 

Tasks are saved to the localStorage, so the user can refresh and close the webpage and the task will persist. If a task does not persist, make sure the save button is clicked after the text was updated! Additionally, the Clear All Tasks button can be clicked to remove the text in all time slots. Upon clicking the button, a confirm will pop-up. If the user confirms, all tasks will be removed from the page and localStorage. If the user denies, then nothing will change. This is useful if you're openning up the task manager on a new day!

**SN:** A big thank you to the UTA bootcamp for providing the base code for this assignment!

## Built With

* HTML
* CSS
* Jscript

## Website

https://ashispatel.github.io/Work-Day-Scheduler-Week-5-Challenge/

## End Note - A Thank You to the Reader

