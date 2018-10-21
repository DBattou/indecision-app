import React from "react";

class AddOption extends React.Component {
  state = { error: undefined };

  handleAddOption = e => {
    e.preventDefault();
    console.log(e);

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="input-form" onSubmit={this.handleAddOption}>
          <input className="input-form__left" type="text" name="option" />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
