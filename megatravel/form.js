function validateForm() {
    var x = document.forms["form1"]["FirstName"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
};
function validateForm() {
    var y = document.forms["form1"]["LastName"].value;
    if (y == "") {
      alert("Last Name must be filled out");
      return false;
    }
}