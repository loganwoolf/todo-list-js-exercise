/* eslint-disable semi */
/* eslint-disable func-style */

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
    },

    markComplete: function() {
      task.complete = true
    }

  }

  return task
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box") // task 0
const task2 = newTask("Do Laundry", "😓") // task 1
const tasks = [task1, task2]

task1.logState()
task1.markComplete()
task1.logState()

