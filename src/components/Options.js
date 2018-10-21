import React from "react";
import Option from "./Option.js";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title ">Your options</h3>
      <button
        className="button button--remove"
        onClick={props.handleDeleteOptions}
      >
        Delete options
      </button>
    </div>
    {!props.options.length && (
      <p className="message">Add an option to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        index={index + 1}
        value={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
