//java script function to welcome message and picture clock function
function Greeting() {
    // getting the time 
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    
    
    var welcome;
    // this is for the greeting of the day
    if (hours < 12)
            welcome = 'Good Morning';
    else if (hours >= 12 && hours <= 17)
            welcome = "Good Afternoon";
    else if (hours > 17 && hours < 24)
            welcome = "Good Evening";
            document.getElementById('Greeting').innerHTML = '<b>'
            + welcome + '</b>' + 'The current date and time is';
            document.getElementById("time").innerHTML = d;
    
            return (
                React.createElement("h3", {id: "Welcome"}, greet, "! ", 
                React.createElement("p", {id: "WelcomeTime"}),"The time is now " + hours + minutes));
    
    }
    //this is for the date and time portion
    function Time(){
        var myDate = new Date();
        let hours = myDate.getHours();
        let minutes = myDate.getMinutes();
        let seconds = myDate.getSeconds();
    
    }
    
    // this is for the image
    function Icon() {
        var current = new Date();
        var dayandnight = current.getHours();
    if  (hours  >= 6 && hours <= 18){
        document.write("<img src = 'Images/sun.jpg'>")
    }
    else if (hours > 18 && hours < 6){
    
        document.write("img src = 'Images/moon.jpg.>");
    }
    }
    function Tick() {
        ReactDOM.render(React.createElement("div",null,React.createElement(Greeting, null)),
        document.getElementById("WelcomeBar"));
    }
    //updating the clock
    setInterval(Tick, 1000);