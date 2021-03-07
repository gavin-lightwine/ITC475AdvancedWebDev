function validateForm() {
    var x = document.forms["form1"]["FirstName"].value;
    if (x==null || x == "") {
      alert("First Name must be filled out");
      return false;
    }


    var y = document.forms["form1"]["LastName"].value;
    if (y ==null ||y == "") {
      alert("Last Name must be filled out");
      return false;
    }
    var z = document.forms["form1"]["phoneNo"].value;
    if (z ==null ||z == "") {
      alert("Phone Number must be filled out");
      return false;
    }
    var a = document.forms["form1"]["email"].value;
    if (a ==null ||a == "") {
      alert("Email must be filled out");
      return false;
    }
    var b = document.forms["form1"]["noOfAdults"].value;
    if (b ==null ||b == "") {
      alert("Number of Adults must be filled out");
      return false;
    }
    var c = document.forms["form1"]["noOfChild"].value;
    if (c ==null ||c == "") {
      alert("Number of Adults must be filled out");
      return false;
    }
    var d = document.forms["form1"]["travelDates"].value;
    if (d ==null ||d == "") {
      alert("Number of Adults must be filled out");
      return false;
    }
}

