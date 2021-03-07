function validateForm() {
    var x = document.forms["form1"]["FirstName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
