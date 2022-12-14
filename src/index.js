import React from "react";
import ReactDom from "react-dom";
// these two above lines are to import or call the react and react-dom packages similar to we used require in the previous projects.

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// The two lines below are the method that we are using from  node onwards to call the packages like we call in the npm

// var React = require("react");
// var ReactDom = require("react-dom");

// the import method to call the packages is better way.

ReactDom.render(<h1>Jatin</h1>, document.getElementById("root"));
// document.getElementbyId is the way to call the element from the index.html file without any change in the html file.

// Babel is the compiler that is used to see exact code of the react,if you commmnet the call of react u notice that
// it does show the errors because in exact react is using here that u will notice if you paster the code

// the above React.Dom ................
// The above can be done using the long below code.

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello world!";
// document.getElementById("root").appendChild(h1);
// these above three lines are also working as same as the ReactDom.ren-------------------------- line

// To combine the multiple elements of html div can be used as below

ReactDom.render(
  <div>
    <h1> Combining </h1>
    <p> The two different elements in the html</p>
  </div>,
  document.getElementById("root")
);

// When I am using the render one after the other the last one is overwriting over the other one.
