function changeBackground(color) {
  var jumbotron = document.querySelector(".jumbotron"); //selects the jumbotron
  var donateBike = document.querySelector(".btn.btn-primary.btn-lrg"); //selects the donate button
  var volunteer = document.querySelector(".btn.btn-secondary.btn-lrg"); // selects the volunteer button

  if (color === "blue") {
    jumbotron.style.backgroundColor = "#588fbd"; //changes the background color to blue
    donateBike.style.backgroundColor = "#ffa500"; //changes the donate button color to orange
    volunteer.style.backgroundColor = "black"; //changes the volunteer button color to black
    volunteer.style.color = "white";
  } else if (color === "orange") {
    jumbotron.style.backgroundColor = "#f0ad4e"; //changes the background color to orange
    donateBike.style.backgroundColor = "#5751fd"; //changes the donate button color to blue
    volunteer.style.backgroundColor = "#31b0d5"; //changes the volunteer button color to blue
    volunteer.style.color = "white";
  } else if (color === "green") {
    jumbotron.style.backgroundColor = "#87ca8a"; //changes the background color to green
    donateBike.style.backgroundColor = "black"; //changes the donate button color to black
    volunteer.style.backgroundColor = "#8c9c08"; //changes the volunteer button color to green
    volunteer.style.color = "white"; //changes the volunteer button color to white
  }
}

const blue = document.getElementById("blueBtn"); //selects the blue button
blue.addEventListener("click", function () {
  //adds an event listener to the blue button
  changeBackground("blue");
});

const orange = document.getElementById("orangeBtn"); //selects the orange button
orange.addEventListener("click", function () {
  //changes the background color to orange
  changeBackground("orange");
});

const green = document.getElementById("greenBtn"); //selects the green button
green.addEventListener("click", function () {
  //changes the background color to green
  changeBackground("green");
});

// Form validation
function validateForm(event) {
  //function to validate the form
  event.preventDefault(); //prevents the form from submitting
  const email = document.getElementById("exampleInputEmail1"); //selects the email input
  const name = document.getElementById("example-text-input"); //selects the name input
  const description = document.getElementById("exampleTextarea"); //selects the description input

  let formElements = [email, name, description]; //creates an array of the form elements

  if (email.value.indexOf("@") === -1) {
    //checks if the email input is valid
    alert("Please enter a valid email"); //alerts the user if the email is invalid
    email.style.backgroundColor = "red"; //changes the email input background color to red
    return false;
  }

  for (elem of formElements) {
    //loops through the form elements
    if (elem.value === "") {
      //checks if the form element is empty
      elem.style.backgroundColor = "red"; //changes the form element background color to red
      alert("Please fill out all fields"); //alerts the user if the form element is empty
      return false;
    }
  }
  alert("Thank you for filling out the form"); //alerts the user if the form is filled out correctly
  for (elem of formElements) {
    //loops through the form elements
    elem.value = ""; //clears the form elements
  }
}

const submitBtn = document.querySelector("form .btn.btn-primary"); //selects the submit button
submitBtn.addEventListener("click", validateForm); //adds an event listener to the submit button
