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


$conn = mysqli_connect($host,$user,$password);?>

     <footer>
   <p>Copyright Protected All rights reserved</p><br/>
   <p>MEGA TRAVELS</p>
   <p>mega@travels.com</p>
</footer>
  
  </body>
 
</html>
