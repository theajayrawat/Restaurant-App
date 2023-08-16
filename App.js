import React from "react"
import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"));
const element1 = React.createElement(
  "p",
  { id: "para1", key: 1 },
  "Hi i am Ajay Rawat"
);
const element2 = React.createElement(
  "p",
  { id: "para2", key: 2 },
  "I am from Uttrakhand"
);
const container = React.createElement("div", { id: "container" }, [
  element1,
  element2,
]);
root.render(container);
