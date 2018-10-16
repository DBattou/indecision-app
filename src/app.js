import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp.js";

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));

class OldSyntax {
  constructor() {
    this.name = "Battou";
  }
}

class NewSyntax {
  name = "Battou";
}

const old = new OldSyntax();
const neew = new NewSyntax();
console.log(old);
console.log(neew);
