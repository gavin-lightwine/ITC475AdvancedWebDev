var activitylist = {
    "Cancun": ["Sports, Volleyball"],

    }
window.onload = fucntion(); {
    var DestinationSelect= document.getElementById(Destination);
    var ActivitySelect = document.getElementById(Activities);
    for (var x in activitylist  ) {
        DestinationSelect.options[DestinationSelect.options.length] = new Option(x, x);
    }
}
