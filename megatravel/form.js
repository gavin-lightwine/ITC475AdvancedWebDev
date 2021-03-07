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
      alert("Last Name must be filled out");
      return false;
    }
}