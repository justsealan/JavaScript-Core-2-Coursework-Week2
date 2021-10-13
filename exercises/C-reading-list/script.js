function readingList(books) {
  // Write your code here...
let bookCovers = [
  "https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGmL._SX330_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
];

for(let i = 0; i < books.length; i++) {
    books[i].cover = bookCovers[i];
}
let bookList = document.createElement("ul");
document.getElementById("content").appendChild(bookList);

books.forEach(element => {
  let book = document.createElement("li");
  bookList.appendChild(book);
  let bookTitle = document.createElement('p');
  bookTitle.innerHTML = element.title + " - " + element.author;
  book.appendChild(bookTitle);
  let bookCover = document.createElement('img');
  bookCover.src = element.cover;
  book.appendChild(bookCover);
  if (element.alreadyRead) {
    book.style.backgroundColor = "green";
  } else {
    book.style.backgroundColor = "red";
  }

  bookList.style.display = "flex";
  bookList.style.listStyleType = "none";
  bookList.style.flexWrap = "wrap";
  bookList.style.padding = "20px";
  book.style.padding = "10px";
  book.style.margin = "15px";
  bookCover.style.width = "200px";
  }); 
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);