/********************
    
    Project 4 Javascript
    Name: Matt Broughton
    Date: 04/25/23

*********************/
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var phonePattern = /^\d{10}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var valid = true;

    if (name === "") {
        alert("Please enter your name.");
        valid = false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10 digit phone number.");
        valid = false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    return valid;
}

