//       iii. app.js - Main application
//                   // TODO: Import task functions
import {addTask, getAllTasks, completeTask} from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again
console.log(addTask("Todo-Task", "low", "2026-02-22"));
console.log(addTask("Dancing", "medium", "2026-02-23"));
console.log(addTask("Singing", "medium", "2026-02-12"));
console.log(addTask("Keyboard", "high", "2026-02-01"));

console.log('All:', getAllTasks());

console.log(completeTask(4));

console.log('After complete:', getAllTasks());