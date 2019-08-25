"use strict";

document.getElementById("pass").maxLength = "10";
document.getElementById("tel").maxLength = "11";

var validate = function validate() {
    var name = document.forms["Form"]["Name"];
    var address = document.forms["Form"]["Address"];
    var email = document.forms["Form"]["EMail"];
    var password = document.forms["Form"]["Password"];
    var phone = document.forms["Form"]["Telephone"];

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
