<!DOCTYPE html>



<html>
 <head>
  <meta name:"viewport" content="width=device-width, initial-scale=1"/>
   <title>Mega Travel</title>
   <link rel="stylesheet" href="style.css"/>

 </head>

  <body>
   <header>
    <img src="Images/megatravelLogo.png" height="200px" alt="logo"/>
 
            
   </header>
    <section>
     <div class="bar"></div>
     <nav>
      <ul>
       <li><a href= "index.html">Home</a></li>
       <li><a href= "about.html">About Us</a></li>
       <li><a href= "contact.html">Contact Agent</a></li>
      </ul>
     </nav>
<h1>Thank you for submitting your travel agent contact request! Here is the information you submitted:</h1>
First Name: <?php echo $_POST["FirstName"]; ?><br>
Last Name:  <?php echo $_POST["LastName"]; ?><br>
Phone Number: <?php echo $_POST["phoneNo"]; ?><br>
Email: <?php echo $_POST["email"]; ?><br>
Number of Adults: <?php echo $_POST["noOfAdults"]; ?><br>
Number of Children: <?php echo $_POST["noOfChildren"]; ?><br>
Travel Dates:<?php echo $_POST["travelDates"];?><br>
Destination:<?php echo $_POST["destination"];?><br>

<h1>An agent will be in touch with you soon!</h1>
//connecting to database
<?php
$conn = mysqli_connect('localhost', 'gavin', 'password1234', 'megatravel');

//check connection
if (!$conn){
  echo 'Connection Error: ' .mysqli_connect_error();
}

CREATE TABLE `megatravel`.`vacation_details` ( `first_name` VARCHAR(255) NOT NULL AUTO_INCREMENT , `last_name` VARCHAR(255) NOT NULL ,
 `email` VARCHAR(255) NOT NULL , `phonenumber` VARCHAR(255) NOT NULL , `number_adults` INT(11) NOT NULL ,
  `number_children` INT(11) NOT NULL , `travel_dates` DATE NOT NULL , PRIMARY KEY (`first_name`)) ENGINE = InnoDB;
<footer>
   <p>Copyright Protected All rights reserved</p><br/>
   <p>MEGA TRAVELS</p>
   <p>mega@travels.com</p>
</footer>
  
  </body>
 
</html>
