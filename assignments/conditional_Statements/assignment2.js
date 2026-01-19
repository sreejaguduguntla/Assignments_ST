// HANDS-ON 1: Smart Login Status Engine
// ----------------------------------------

// Initial data:
//     let isLoggedIn = true;
//     let isProfileComplete = false;

// Tasks:
//    1. If user is not logged in → show "Please login"
//    2. If logged in but profile incomplete → show "Complete your profile"
//    3. If logged in and profile complete → show "Welcome back!"
//    4. Store the result in message
//    5. Print the message
// let isLoggedIn = true
// let isProfileComplete = true;

if(!isLoggedIn){
  message = "Please Login"
}
else if(!isProfileComplete){
  message = "Complete Your Profile"
}
else{
  message = "Welcome Back!"
}

console.log(message)
