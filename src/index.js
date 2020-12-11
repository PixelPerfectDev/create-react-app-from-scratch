import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";

// Registering the service worker
import runtime from "serviceworker-webpack-plugin/lib/runtime";
if ("serviceWorker" in navigator) {
  const registration = runtime.register();
}

const App = () => {
  return <div>Hello World!</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
