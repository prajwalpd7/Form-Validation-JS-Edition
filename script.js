function validateForm() {
    // Get the values of the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    // Validate that the name field is not empty
    if (name == "") {
      alert("Name field must not be empty");
      return false;
    }
  
    // Validate that the email field is not empty and is in a valid format
    if (email == "") {
      alert("Email field must not be empty");
      return false;
    } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        alert("Email is not in a valid format");
        return false;
      }
    }
  
    // Validate that the password field is not empty and meets the minimum length requirement
    if (password == "") {
      alert("Password field must not be empty");
      return false;
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
  
    // Validate that the confirm password field is not empty and matches the password field
    if (confirmPassword == "") {
      alert("Confirm password field must not be empty");
      return false;
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    // If all validation checks pass, return true to submit the form
    return true;
  }
      