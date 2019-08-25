document.getElementById("pass").maxLength = "10";
document.getElementById("tel").maxLength = "11";

const validate = () => {
    let name = document.forms["Form"]["Name"];
    let address = document.forms["Form"]["Address"];
    let email = document.forms["Form"]["EMail"];
    let password = document.forms["Form"]["Password"];
    let phone = document.forms["Form"]["Telephone"];  
   
    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (address.value == "") {
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    }   
    if (email.value == "") {     
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (email.value.indexOf("@", 0) < 0) { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (phone.value == "") {
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    if (password.value == "") {
        window.alert("Please enter your password - maximum characters: 10"); 
        password.focus(); 
        return false; 
    }
    return true; 
};
