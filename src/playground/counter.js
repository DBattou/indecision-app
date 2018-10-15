// import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    let countJson = localStorage.getItem("count");
    if (!isNaN(countJson)) {
      let count = parseInt(countJson);
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.count != this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handlePlusOne() {
    // this.setState({ count: this.state.count + 1 }); // deprecated
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }
  handleReset() {
    this.setState(() => {
      return { count: 0 };
    });
  }
  render() {
    return (
      <div>
        <h1>Counter = {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("root"));

// const renderCounter = () => {
//   let templateTwo = (
//     <div>
//       <h1>Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={addOne}>Increment</button>
//       <button onClick={minusOne}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, document.getElementById("root"));
// };

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounter();
// };
// const minusOne = () => {
//   count--;
//   renderCounter();
// };
// const reset = () => {
//   count = 0;
//   renderCounter();
// };

// renderCounter();
