import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

//Creating the variables
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg",
  title: "It's Not Easy Being a Bunny",
  author: "Marilyn Sadler"
}

//Explicit return
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img} title={firstBook.title} author={firstBook.author}
      ></Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}></Book>
    </section >
  );
}

//Implicit return
const Book = (props) => {
  return (
    <article className="book">
      <img
        src={props.img}
        alt="book-img"
      ></img>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>

    </article>
  );
}

ReactDOM.render(<BookList></BookList>, document.getElementById("root"));
