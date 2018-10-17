import React from "react";
import Option from "./Option.js";

const Options = props => (
  <div>
    {!props.options.length && <p>Add an option to get started</p>}
    <button onClick={props.handleDeleteOptions}>Delete options</button>
    {props.options.map(option => (
      <Option
        key={option}
        value={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
