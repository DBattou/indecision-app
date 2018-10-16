import React from "react";
import ReactDOM from "react-dom";
import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";

class IndecisionApp extends React.Component {
  state = { options: [] };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToDelete => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return option != optionToDelete;
      })
    }));
  };

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const action = this.state.options[randomNumber];
    alert("You should do : " + action);
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter Valid option";
    } else if (this.state.options.indexOf(option) != -1) {
      return "This option already exists";
    }
    this.setState(prevState => {
      return { options: prevState.options.concat(option) };
    });
  };

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

export default IndecisionApp;
