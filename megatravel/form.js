function validateForm() {
    var x = document.forms["form1"]["FirstName"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
}