function validate() {
    if(document.form1.FirstName.value == "")
    {
        alert("Please provide your First Name!");
        document.form1.focus();
        return false;
    }
    return(true)
}