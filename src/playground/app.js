class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = { options: [] };
  }

  componentDidMount() {
    try {
      let jsonItems = localStorage.getItem("options");
      let options = JSON.parse(jsonItems);
      if (options) this.setState(() => ({ options }));
    } catch (error) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      let options = JSON.stringify(this.state.options);
      localStorage.setItem("options", options);
    }
  }

  componentWillUnmout() {
    console.log("Component will unmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToDelete) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option != optionToDelete;
      })
    }));
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const action = this.state.options[randomNumber];
    alert("You should do : " + action);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter Valid option";
    } else if (this.state.options.indexOf(option) != -1) {
      return "This option already exists";
    }
    this.setState(prevState => {
      return { options: prevState.options.concat(option) };
    });
  }

  render() {
    return (
      <div>
        <Header title="Indecision App" subtitle="Subtitle" />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Some default title"
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do ?
      </button>
    </div>
  );
};

const Options = props => {
  return (
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
};

const Option = props => {
  return (
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
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }

  handleAddOption(e) {
    e.preventDefault();
    console.log(e);

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {<p>{this.state.error}</p> && this.state.error}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
