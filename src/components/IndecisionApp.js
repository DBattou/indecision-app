import React from "react";
import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";
import OptionModal from "./OptionModal.js";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

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
    //console.log(action);

    this.setState(() => ({ selectedOption: action }));

    console.log(this.state.selectedOption);
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
        <Header
          title="Indecision App"
          subtitle="What are you going to do next"
        />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <p>{this.state.selectedOption}</p>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default IndecisionApp;
