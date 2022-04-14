import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

//Explicit return
function BookList() {
  return (
    <section className="booklist">
      <Book></Book>
    </section>
  );
}

const author = "Amelia Hepworth";

//Implicit return
const Book = () => {
  const title = "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg"
        alt="book-img"
      ></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

ReactDOM.render(<BookList></BookList>, document.getElementById("root"));
