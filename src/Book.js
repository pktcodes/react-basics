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

export default Book;
