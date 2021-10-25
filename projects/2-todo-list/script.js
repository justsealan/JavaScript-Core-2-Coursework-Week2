function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  // prevent duplicates from the first todo list
  if (list.children.length > 0) {
    list.innerHTML = "";
  }
  for (let i = 0; i < todos.length; i++) { //for loop to iterate through the todos array
    let todo = todos[i];
    let div = document.createElement("div");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i1 = document.createElement("i");
    let i2 = document.createElement("i");
    i1.className = "fa fa-check";
    i2.className = "fa fa-trash";
    span.appendChild(i1);
    span.appendChild(i2);
    li.appendChild(span);
    li.appendChild(document.createTextNode(todo.task));
    div.appendChild(li);
    list.appendChild(div);
    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center"
    );
    span.setAttribute("class", "badge bg-primary rounded-pill");
    if (todo.completed) {   //if the todo is completed, add the line-through styling
      li.setAttribute("style", "text-decoration: line-through");
    }
    i1.addEventListener("click", function () { //add event listener to the checkbox
      if (li.style.textDecoration === "line-through") { //if the todo is completed, remove the line-through styling
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    i2.addEventListener("click", function () { //add event listener to the delete button
      li.remove();
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.getElementById("todoInput");
  let todo = input.value; 
  input.value = ""; //reset the input field to be blank
  todos.push({ task: todo, completed: false }); //push the new todo to the todos array
  populateTodoList(todos);  //call the populateTodoList function to display the new todo

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let list = document.getElementById("todo-list"); 
  let children = list.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i]; 
    if (child.style.textDecoration === "line-through") {  
      list.removeChild(child);  //if the todo is completed, remove the todo from the list
    }
  }
}
