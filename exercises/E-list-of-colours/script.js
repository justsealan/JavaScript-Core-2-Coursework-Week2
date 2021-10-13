function listOfColours(colours) {
  // Write your code here...

  let select = document.createElement("select"); // create a select element
  let p = document.createElement("p"); // create a p element
  p.textContent = "Select a colour"; // set the text content of the p element to "Select a colour"
  for (let i = 0; i < colours.length; i++) { // iterate through the colours array
    let option = document.createElement("option"); // create an option element
    option.textContent = colours[i]; // set the text content of the option element to the current element in the colours array
    select.appendChild(option); // append the option element to the select element
  }
  select.addEventListener("change", function() { //change is better than click because it works when you click on the option
    
    p.textContent = "You have selected: " + select.value; // set the text content of the p element to "You have selected: " + the value of the selected option
    p.style.color = select.value; // set the colour of the p element to the value of the selected option
  });

  document.getElementById("content").appendChild(select); // append the select element to the content div
  document.getElementById("content").appendChild(p); // append the p element to the content div
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
