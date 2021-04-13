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
<?php


$host = 'localhost:3306';
$user = 'gavin';
$password = "";
$db = 'megatravel';


$conn =  new mysqli($host,$user,$password, $db);

if (!$conn)
{
   echo 'Connection failed<br>';
   echo 'Error number: ' . mysqli_connect_error() . '<br>';
   echo 'Error message: ' . mysqli_connect_error() . '<br>';
   die();
}



$sql = "SELECT * FROM `vacation_details`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Client First Name:" . $row["FirstName"]. echo "<br>";
    echo "Client Last Name:" . $row["LastName"]. echo "<br>";
    echo "Client Phone Number:" . $row["phoneNo"]. echo "<br>";
    echo "Client Email:" . $row["email"]. echo "<br>";
    echo "Numbere of Adults:" . $row["NoOfAdults"]. echo "<br>";
    echo "Number of Children" . $row["noOfChildren"]. echo "<br>";
    echo "Travel Dates" . $row["travelDates"]. echo "<br>";
    
  }
} else {
  echo "0 results";
}
$conn->close();



?>

     <footer>
   <p>Copyright Protected All rights reserved</p><br/>
   <p>MEGA TRAVELS</p>
   <p>mega@travels.com</p>
</footer>
  
  </body>
 
</html>
