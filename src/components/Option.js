import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.index}. {props.value}
    </p>
    <button
      className="button button--remove"
      onClick={() => {
        props.handleDeleteOption(props.value);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
