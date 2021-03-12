function currentTime() {
    var d = new Date();


    document.getElementById('clock').innerHTML = 
    hours + " : " + minutes + " : " + seconds + " ";
    var t = setTimeout(currentTime, 1000);
}
function saveTimes() {

    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();


    document.getElementById("time").innerHTML= h + ":" + m;
    var d = setTimeout(currentTime, 1000) 

    var garageStart =document.getElementById("GarageDoorStart").value;
   


    
    var garageEnd = document.getElementById("GarageDoorEnd").value;
    
    var livingLampStart = document.getElementById('LivingRoomLampStart').value;
     var livingLampEnd = document.getElementById('LivingRoomLampEnd').value;
   var frontDoorStart = document.getElementById('FrontDoorStart').value;
    var frontDoorEnd = document.getElementById('FrontDoorEnd').value;
    var backDoorStart = document.getElementById('BackDoorStart').value;
     var backDoorEnd = document.getElementById('BackDoorEnd').value;
     var garageStart = document.getElementById('GarageDoorStart').value;
     var garageEnd = document.getElementById('GarageDoorEnd').value;
     var diningLightStart = document.getElementById('DiningRoomLightStart').value;
    var diningLightEnd = document.getElementById('DiningRoomLightEnd').value;
    var  bathroomFanStart = document.getElementById('BathroomFanStart').value;
    var BathroomFanEnd = document.getElementById('BathroomFanEnd').value;
    var kitchenFanStart = document.getElementById('KitchenFanStart').value;
   var kitchenFanEnd =  document.getElementById('KitchenFanEnd').value;
   var  washerStart =  document.getElementById('WasherStart').value;
   var washerEnd =  document.getElementById('WasherEnd').value;
    var dryerStart = document.getElementById('DryerStart').value;
   var dryerEnd =  document.getElementById('DryerEnd').value;
    
    var bedroomDeskStart = document.getElementById('BedroomDeskLampStart').value;
    var bedroomDeskEnd = document.getElementById('BedroomDeskLampEnd').value;
     var bedroomFloorStart = document.getElementById('BedroomFloorLampStart').value;
   var bedroomFloorEnd =  document.getElementById('BedroomFloorLampEnd').value;

}

function sign (garagestarttime, garageendtime)

if(currentTime > garagestarttime && currentTime < garageendtime)
{}























    




