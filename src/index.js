import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

//Explicit return
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// ReactDOM.render(<BookList></BookList>, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookList></BookList>
);
