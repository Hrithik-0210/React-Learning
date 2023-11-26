import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "h1",
  },
  "Namaste React"
);

const heading2 = (
  <h1 id="heading 2" key="h2">
    Hello world
  </h1>
);

const FirstComponent = () => {
  return <h1>this is my first functional component</h1>;
};

const Secondcomponent = () => {
  return (
    <div>
      <FirstComponent />
      <h1>this is second component.</h1>
    </div>
  );
};

function FunComponent() {
  return <h1>Functional component</h1>;
}

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Secondcomponent />
    <FunComponent />
  </div>
);
// root.render(<Secondcomponent />);
