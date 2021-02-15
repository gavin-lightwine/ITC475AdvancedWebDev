//java script function to welcome message and picture clock function

// getting the time 
var myDate = new Date();
var hours = myDate.getHours();
var minutes = myDate.getMinutes();

var welcome;
// this is for the greeting of the day
if (hours < 12)
        welcome = "Good Morning";
else if (hours >= 12 && hours <= 17)
        welcome = "Good Afternoon";
else if (hours > 17 && hours < 24)
        welcome = "Good Evening";

// this is for the image

if (hours  >= 6 && hours <= 18)