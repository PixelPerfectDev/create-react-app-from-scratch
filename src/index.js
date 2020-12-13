import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "./Nav";
import "./styles/css/index.css";

// Registering the service worker
import runtime from "serviceworker-webpack-plugin/lib/runtime";
if ("serviceWorker" in navigator) {
  const registration = runtime.register();
}

const App = ({ name }) => {
  const buttons = [
    {
      name: "FoodSpinner",
      link: "/FoodSpinner",
    },
    {
      name: "Is it Wood?",
      link: "/FoodSpinner",
    },
    {
      name: "TD PUBG",
      link: "/TDPUBG",
    },
  ];

  return (
    <div>
      <Nav />
      <p className={"test"}>Hi {name}!</p>
      {buttons.map((item) => (
        <InnerDiv key={item.name} name={item.name} link={item.link}></InnerDiv>
      ))}
    </div>
  );
};

const InnerDiv = ({ name, link }) => {
  return (
    <a href={link}>
      <div className="inner">{name}</div>
    </a>
  );
};

ReactDOM.render(<App name={"Brent"} />, document.getElementById("app"));
