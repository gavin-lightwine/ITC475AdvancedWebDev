function currentTime() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();


    document.getElementById('clock').innerHTML = 
    hours + " : " + minutes + " : " + seconds + " ";
    var t = setTimeout(currentTime, 500);
}
function getTIme() {

    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();


    document.getElementById("time").innerHTML= h + ":" + m;
    var d = setTimeout(currentTime, 1000) 



}
