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

$host = 'localhost:3306';
$user = 'gavin';
$password = "";
$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$Email = $_POST['email'];
$NoOfAdults = $_POST['noOfAdults'];
$NoOfChild = $_POST['noOfChild'];
$TravelDates = $_POST['travelDates'];
$Destination = $_POST['Destination'];



$conn = mysqli_connect($host,$user,$password);

if (!$conn)
{
   echo 'Connection failed<br>';
   echo 'Error number: ' . mysqli_connect_error() . '<br>';
   echo 'Error message: ' . mysqli_connect_error() . '<br>';
   die();
}

else {
  $stmt = $conn->prepare("insert into vacation_details(firstName, LastName, email, noOfAdults , noOfChild , travelDates) values(?, ?, ?, ?, ?, ?)");
  $stmt->bind_param("sssssi", $firstName, $lastName, $email, $NoOfAdults, $NoOfChild, $TravelDates);
  $execval = $stmt->execute();
  echo $execval;
  echo "successfully...";
  $stmt->close();
  $conn->close();
}
?>



       




?>

<footer>
   <p>Copyright Protected All rights reserved</p><br/>
   <p>MEGA TRAVELS</p>
   <p>mega@travels.com</p>
</footer>
  
  </body>
 
</html>
