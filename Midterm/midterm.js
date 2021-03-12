function currentTime() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();


    document.getElementById('clock').innerHTML = 
    hours + " : " + minutes + " : " + seconds + " ";
    var t = setTimeout(currentTime, 500);
}
