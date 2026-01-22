// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
        // i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (typeof title !== 'string') return false;
  const t = title.trim();
  return t.length >= 3;
}

                      // 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  if (typeof priority !== 'string') return false;
  const val = priority.trim().toLowerCase();
  return ['low', 'medium', 'high'].includes(val);
}
                      
                      // 3. Validate due date (must be future date)
function validateDueDate(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) return false; // invalid date
  const now = new Date();
  // due date must be strictly in the future
  return d.getTime() > now.getTime();
}

export {validateTitle, validatePriority, validateDueDate }