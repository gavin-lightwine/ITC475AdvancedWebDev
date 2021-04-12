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

$host = 'localhost';
$user = 'gavin';
$password = "";


$conn = mysqli_connect($host,$user,$password);
//check connection
if (!$mysqli)
{
   echo 'Connection failed<br>';
   echo 'Error number: ' . mysqli_connect_errno() . '<br>';
   echo 'Error message: ' . mysqli_connect_error() . '<br>';
   die();
}

echo 'Successfully connected!<br>';
?>

<footer>
   <p>Copyright Protected All rights reserved</p><br/>
   <p>MEGA TRAVELS</p>
   <p>mega@travels.com</p>
</footer>
  
  </body>
 
</html>
