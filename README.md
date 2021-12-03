# Work Day Scheduler

## Purpose

![Adding some tasks to the work day scheduler and showing functions of save and clear all buttons](https://github.com/AshisPatel/Work-Day-Scheduler-Week-5-Challenge/blob/main/assets/images/wds-preview.gif) 

The Work Day Scheduler is a simple task tracker that lets you add track tasks for a standard 9AM-5PM workday! The work day scheduler is intended for use on standard monitors, or larger. 

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

https://ashispatel.github.io/Work-Day-Scheduler/

## End Note - A Thank You to the Reader

Thank you for taking the time to check out my work day scheduler and README! In this weeks challenge, I learend to appreciate the power of third-party libraries and how **efficient** they can be. The power of the grid in bootstrap is phenomenal, and Jquery allows for some really incredible DOM traversal and manipulation. *$* just got even more *money*. Please enjoy the fun fact below and a random gif from my collection of things that make me laugh! I hope they improve your day, and give you something to share with a friend!

**Fun Fact**: Humans might be able to hibernate like bears. This belief comes from a news story where a stowaway survived a flight from California to Hawaii while hiddein in the wheel of an airplane (2014). The low oxygen content in the wheel and freezing temperatures are thought to have induced a state of hibernation in the stowaway. Theres also a whole branch of research and studies dedicated to trying to induce human hibernation in order to send people off to far-flung galaxies. I personally, am more interested in sleeping through the Texas Summers, so if you don't hear from me for a few months - it was all in the name of science. 

![Person running away from a fast person wearing a bear mask](https://github.com/AshisPatel/Work-Day-Scheduler-Week-5-Challenge/blob/main/assets/images/running_away.gif)

*(Me running from my responsibilities)*
