function validateForm() {
    var x = document.forms["form1"]["FirstName"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
  }
  function validateForm() {
    var x = document.forms["form1"]["LastName"].value;
    if (x == "") {
      alert("Last Name must be filled out");
      return false;
    }
  }
