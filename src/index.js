import React from "react";
import ReactDOM from "react-dom";

function Greeting(){
  return <h1>This is the greeting component</h1>;
}

ReactDOM.render(<Greeting></Greeting>, document.getElementById("root"));
