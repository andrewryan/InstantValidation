function validate()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  var passLength = passEntered.length;
  
  //Username test conditions
  if(userLength < 6)
  {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");//updated
  }
  else if(userEntered.indexOf(' ') > 0)
  {
    document.getElementById("usernameError").innerHTML="Username cannot contain a space.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");//updated
  }
  else
  {
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");//updated
  }

  //Password test conditions
  if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");//updated  
  }
  else if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot match username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");//updated
  }
  else if(passLength < 6 || passLength > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");//updated
  }
  else
  {
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");//updated
  }
}

function display()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert("Username is: " + userEntered + " Password is: " + passEntered);
}
function validateUsername()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  var passLength = passEntered.length;
  if(userLength < 6)
  {
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if(userEntered.indexOf(' ') > 0)
  {
    document.getElementById("usernameError").innerHTML="Username cannot contain a space.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else
  {
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }
}
function validatePassword()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  var passLength = passEntered.length;
  if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success"); 
  }
  else if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot match username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if(passLength < 6 || passLength > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else
  {
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }
}