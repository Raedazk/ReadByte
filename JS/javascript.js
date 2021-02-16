function required(form, field, msg) {
  if (document.forms[form][field].value == "") {
    document.forms[form][field].classList.add("invalid");

    var feedback = document.forms[form].querySelector(
      "[name=" + field + "] + .form-validation-results"
    );
    if (!feedback) {
      feedback = document.createElement("div");
      feedback.classList.add("form-validation-results");
      feedback.innerHTML = msg;
      feedback.style.color = "red";
      document.forms[form][field].parentNode.insertBefore(
        feedback,
        document.forms[form][field].nextSibling
      );
    }
    return false;
  } else {
    document.forms[form][field].classList.remove("invalid");
    var feedback = document.forms[form].querySelector(
      "[name=" + field + "] + .form-validation-results"
    );
    if (feedback) {
      feedback.parentElement.removeChild(feedback);
    }
    return true;
  }
}
function validateEmail(form, field, msg) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      document.forms[form][field].value
    )
  ) {
    document.forms[form][field].classList.remove("invalid");
    var feedback = document.forms[form].querySelector(
      "[name=" + field + "] + .form-validation-results"
    );
    if (feedback) {
      feedback.parentElement.removeChild(feedback);
    }
    return true;
  }
  document.forms[form][field].classList.add("invalid");
  var feedback = document.forms[form].querySelector(
    "[name=" + field + "] + .form-validation-results"
  );
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.classList.add("form-validation-results");
    feedback.innerHTML = msg;
    feedback.style.color = "red";
    document.forms[form][field].parentNode.insertBefore(
      feedback,
      document.forms[form][field].nextSibling
    );
  }
  return false;
}

function validateFormLogIn() {
  return (
    (required("LogIn", "name", "Name must be filled out") &
      required("LogIn", "psw", "Password must be filled out")) !==
    0
  );
}

function validateFormSignUp() {
  return (
    (required("SignUp", "name", "Name must be filled out") &
      required("SignUp", "email", "Email must be filled out") &
      required("SignUp", "psw", "Password must be filled out") &
      validateEmail("SignUp", "email", "Please Enter Valid Email")) !==
    0
  );
}
function validateFormFeedBack() {
  return (
    (required("Feedbackform", "fname", "First Name must be filled out") &
      required("Feedbackform", "lname", "Last Name must be filled out") &
      required("Feedbackform", "Email", "Email must be filled out") &
      required("Feedbackform", "msg", "Message must be filled out") &
      required("Feedbackform", "MobileNumber", "Mobile Number must be filled out")&
      required("Feedbackform", "OrderNumber", "Order Number must be filled out")&
      required("Feedbackform", "IssueType", "Issue Type must be filled out")&
      validateEmail("Feedbackform", "Email", "Please Enter Valid Email")) !==
    0
  );
}

//  ------------------------- handling the foucsed event for forms -------------------------

function focused(x) {
  x.classList.add("focus");
  x.classList.remove("blur");
  // x.style.background = "#F6D146";
}
function blurFunction(x) {
  x.classList.add("blur");
  x.classList.remove("focus");
  // x.style.background = "white";
}
