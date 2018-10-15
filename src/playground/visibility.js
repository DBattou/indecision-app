class VisibilityToggleText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    this.setState(prevState => {
      console.log(this.state.isVisible);

      return { isVisible: !prevState.isVisible };
    });
  }

  render() {
    return (
      <div>
        <h1>Toggle text visibility</h1>
        <button onClick={this.handleVisibility}>
          {this.state.isVisible ? "Hide text" : "Show text"}
        </button>
        {this.state.isVisible && <p>Coucou</p>}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggleText />, document.getElementById("root"));
