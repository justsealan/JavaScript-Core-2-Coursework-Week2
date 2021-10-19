function changeBackground(color) {
  var jumbotron = document.querySelector(".jumbotron");
  var donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
  var volunteer = document.querySelector(".btn.btn-secondary.btn-lrg");

  if (color === "blue") {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBike.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black";
    volunteer.style.color = "white";
  } else if (color === "orange") {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBike.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "#31b0d5";
    volunteer.style.color = "white";
  } else if (color === "green") {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBike.style.backgroundColor = "black";
    volunteer.style.backgroundColor = "#8c9c08";
    volunteer.style.color = "white";
  }
}

const blue = document.getElementById("blueBtn");
blue.addEventListener("click", function () {
  changeBackground("blue");
});

const orange = document.getElementById("orangeBtn");
orange.addEventListener("click", function () {
  changeBackground("orange");
});

const green = document.getElementById("greenBtn");
green.addEventListener("click", function () {
    changeBackground("green");
    });
