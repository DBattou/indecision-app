import React from "react";

const Option = props => (
  <div>
    {props.value}
    <button
      onClick={() => {
        props.handleDeleteOption(props.value);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
