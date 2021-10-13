function todoList(todos) {
  // Write your code here...
  var content = document.getElementById("content");
  var ul = document.createElement("ul");
  content.appendChild(ul);
  for (var i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = todos[i].todo;
    console.log(todos[i].todo);
    li.addEventListener("click", function() {
      if (this.style.textDecoration === "line-through") {
        this.style.textDecoration = "none";
      } else {
        this.style.textDecoration = "line-through";
      }
    });
    ul.appendChild(li);
  }
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);