# Form-Validation-JS-Edition

Form Validation in JavaScript

This repository contains an example of form validation using JavaScript. Form validation is an important part of any web application, as it helps to ensure that the data entered by the user is clean, correct, and complete.


How it works
The form validation script is located in the `script.js` file. It includes a function called `validateForm` that is called when the form is submitted. This function performs various validation checks on the form fields, including checking for empty fields, validating the format of the email field, and verifying that the password and confirm password fields match.

If any of the validation checks fail, the function displays an alert and returns `false`, which prevents the form from being submitted. If all of the checks pass, the function returns `true`, allowing the form to be submitted.

How to use
To use the form validation script, follow these steps:

1.Add the `script.js` file to your project and include it in your HTML file using a script tag.

2.Add a `onsubmit` event handler to your form element that calls the validateForm function. For example:


```
<form onsubmit="return validateForm()">
  <!-- form fields go here -->
  <input type="submit" value="Submit">
</form>
```


3.Add the form fields to your HTML file. The validateForm function expects the following fields to be present:
~A text field with an `id` of "name"
~A text field with an `id` of "email"
~A password field with an `id` of "password"
~A password field with an `id` of "confirm-password"
 Here is an example of the form fields you might use:

```
<form onsubmit="return validateForm()">
  <label for="name">Name:</label><br>
  <input type="text" id="name"><br>
  <br>
  <label for="email">Email:</label><br>
  <input type="text" id="email"><br>
  <br>
  <label for="password">Password:</label><br>
  <input type="password" id="password"><br>
  <br>
  <label for="confirm-password">Confirm Password:</label><br>
  <input type="password" id="confirm-password"><br>
  <br>
  <input type="submit" value="Submit">
</form> 
```



Customization
You can customize the form validation script to suit your needs by modifying the validateForm function. For example, you might want to add additional validation checks or change the error messages that are displayed.

Contributions
If you would like to contribute to this repository, please feel free to create a pull request with your changes.
