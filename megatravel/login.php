<?php
$host = 'localhost:3306';
$user = 'gavin';
$password = "";
$db = 'megatravel';

mysqli_connect($host,$user,$password,$db);



if(isset($_POST['username'])){

  $uname=$_POST['username'];
  $password=$_POST['password'];
  
  $sql="select * from login where user='".$username."'AND password='".$password."' limit 1";
  
  $result=mysqli_query($sql);
  
  if(mysql_num_rows($result)==1){
      echo " You Have Successfully Logged in";
      exit();
  }
  else{
      echo " You Have Entered Incorrect Password";
      exit();
  }

}



?>


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
<body>
    <h1>Admin Login</h1>
    <br>
<form action = "admin.php" method="post" id="formlogin">
    <label>Username:</label>
    <input type="text" id="user" name:"user" />

<br>
<br/>

    <label>Password:</label>
    <input type="text" id="password" name:"password" />
<br>

<br/>
<button type="submit">Submit</button>
<button type="reset" form="formlogin" value="Reset">Reset</button>
<br>


</form>
</body>
     <footer>
   <p>Copyright Protected All rights reserved</p><br/>
   <p>MEGA TRAVELS</p>
   <p>mega@travels.com</p>
</footer>
  
  </body>
 
</html>






