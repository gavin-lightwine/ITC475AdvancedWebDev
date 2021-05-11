
	var bunny = bunny;
	var turtle = turtle;
	var stoplight = stoplight;
	var stoplightlink = stoplightlink;
	var winnertext = winnertext;
	

	

	

	var winner= 0;
	

	 
	function endrace() {
	  console.log("The Winner is: "+ winner);
	  
	  stoplight.src = "Resources/Images/TrafficLightRed.svg";
	  stoplightlink.onclick = reset;
		
		if (winner == 1){
			winnertext.innerHTML = "Hare Wins!";}
		else if (winner == 2) {
			 winnertext.innerHTML = " Tortoise Wins!";}
		else if (winner == 3) {
			winnertext.innerHTML = "Its a tie!";}
		else{
			winnertext.innerHTML = "Impossible!";}
		
		winner = 0;
		
	  
	  
	}
	

	function reset() {
	  
	  winnertext.innerHTML = "";
	  
	  console.log("Resetting race");
	  
	  bunny.style.left = "5%";
	  turtle.style.left = "5%";
	  
	   stoplightlink.onclick = race;
	}
	  
	  function race() {
	    
	    console.log("Beginning race");
	    
	    stoplight.src="Resources/Images/TrafficLightGreen.svg";
		  
	

	    function tick() {
	      
	      
		var bunny_speed = Math.floor(Math.random() * 8) *0.1; 
		var turtle_speed = Math.floor(Math.random() * 8) *0.1;
		    
		    
	bunny.style.left = (parseFloat(bunny.style.left)/100 + bunny_speed).toLocaleString("en", {style: "percent"});
	turtle.style.left = (parseFloat(turtle.style.left)/100 + turtle_speed).toLocaleString("en", {style: "percent"});
	    
		  if (parseFloat(bunny.style.left) > 90)
		  {
				winner = 1;
			}
			if (parseFloat(turtle.style.left) > 90) 
			{
				if (winner == 1) 
				{
					winner = 3;
				} else
				{
					winner = 2;
				}
			}
			if (winner !== 0)
			{
				clearInterval(timer);
				endrace();
			}
		}
		var timer = setInterval(tick, 15);
	}

