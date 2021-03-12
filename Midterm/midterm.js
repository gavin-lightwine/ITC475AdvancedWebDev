function currentTime() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();


    document.getElementById('clock').innerHTML = 
    hours + " : " + minutes + " : " + seconds + " ";
    var t = setTimeout(currentTime, 500);
}
function saveTimes() {

    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();


    document.getElementById("time").innerHTML= h + ":" + m;
    var d = setTimeout(currentTime, 1000) 

    document.getElementById('GarageDoorStart').value = time();
    document.getElementById('GarageDoorEnd').value = time();
    document.getElementById('LivingRoomLampStart').value = time();
    document.getElementById('LivingRoomLampEnd').value = time();
    document.getElementById('FrontDoorStart').value = time();
    document.getElementById('FrontDoorEnd').value = time();
    document.getElementById('BackDoorStart').value = time();
    document.getElementById('BackDoorEnd').value = time();
    document.getElementById('GarageDoorStart').value = time();
    document.getElementById('DiningRoomLightStart').value = time();
    document.getElementById('DiningRoomLightEnd').value = time();
    document.getElementById('BathroomFanStart').value = time();
    document.getElementById('BathroomFanEnd').value = time();
    document.getElementById('KitchenFanStart').value = time();
    document.getElementById('KitchenFanEnd').value = time();
    document.getElementById('WasherStart').value = time();
    document.getElementById('WasherEnd').value = time();
    document.getElementById('DryerStart').value = time();
    document.getElementById('DryerEnd').value = time();
    document.getElementById('GarageDoorStart').value = time();
    document.getElementById('BedroomDeskLampStart').value = time();
    document.getElementById('BedroomDeskLampEnd').value = time();
    document.getElementById('BedroomFloorLampStart').value = time();
    document.getElementById('BedroomFloorLampEnd').value = time();






















    



}
