import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Creating the variables
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg",
    title: "It's Not Easy Being a Bunny",
    author: "Marilyn Sadler",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL200_SR200,200_.jpg",
    title: "Ugly Love: A Novel",
    author: "Colleen Hoover",
  },
];

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

//Implicit return
const Book = ({ img, title, author }) => {
  const handleClick = (event) => {
    console.log(event);
    console.log(event.target);
    return alert("Reference got clicked");
  };

  const handleComplex = (author) => {
    return console.log(author);
  };

  const handleMouseOver = () => {
    console.log(title);
  };

  return (
    <article className="book" onMouseOver={handleMouseOver}>
      <img src={img} alt="book-img"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={handleClick}>Reference</button>
      <button onClick={() => handleComplex(author)}>Complex</button>
    </article>
  );
};

// ReactDOM.render(<BookList></BookList>, document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookList></BookList>
);
