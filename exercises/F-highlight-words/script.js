function highlightWords(paragraph, colours) {
  // Write your code here...
  let content = document.getElementById("content"); // get the content element
  let p = document.createElement("p"); // create a new paragraph element
  let select = document.createElement("select"); // create a new select element
  for (let i = 0; i < colours.length; i++) { // loop through the colours array
    let option = document.createElement("option"); // create a new option element
    option.innerText = colours[i]; // set the option text to the colour
    select.appendChild(option); // append the option to the select element
}
  let words = paragraph.split(" "); // split the paragraph into words
  for (let i = 0; i < words.length; i++) { // loop through the words array
    let span = document.createElement("span"); // create a new span element
    span.innerText = words[i] + " "; // set the span text to the word
    p.appendChild(span); // append the span to the paragraph
    span.addEventListener("click", function() { // add a click event listener to the span
      if (select.value === "none") { // if the select value is none
        span.style.backgroundColor = ""; // set the span background colour to none
      } else { // otherwise
        span.style.backgroundColor = select.value; // set the span background colour to the select value
      }
    });
  }
  content.appendChild(p);
  content.appendChild(select);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
