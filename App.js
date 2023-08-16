import React from "react"
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"));

//React element
const element1 = (
  <p id="para1" key="1">
    Hi 
  </p>
);

//React Component

const FunctionalComponent = () =>{
  var xyz=10;
  return(
    <div>
      {element1}
      <h1>hello</h1>
    </div>
  );
};

root.render(<FunctionalComponent/>);



