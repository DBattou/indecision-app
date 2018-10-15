"use strict";

const app = {
  name: "Baptiste",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderOptions();
};

const eraseData = () => {
  app.options = [];
  renderOptions();
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

let renderOptions = () => {
  const template = (
    <div>
      <h1>{app.name}</h1>
      <p>{app.options.length > 0 ? "Here are your options :" : "No options"}</p>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add options</button>
      </form>
      <button onClick={eraseData}>Erase data</button>
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        Make decision
      </button>
    </div>
  );

  ReactDOM.render(template, document.getElementById("root"));
};

renderOptions();
