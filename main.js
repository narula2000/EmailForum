var validateEmail = function (elementValue) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
};

var validator = function () {
  var email = document.getElementById("email").value;
  if (validateEmail(email)) {
    document.getElementById("forum").innerHTML = document.getElementById(
      "success"
    ).innerHTML;
    console.log("HTML ->", document.getElementById("success").innerHTML);
  } else {
    document.getElementById("email").style.outline = "none";
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("error-text").innerHTML =
      "A valid email is required";
  }
};
