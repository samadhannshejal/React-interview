import { Component } from "react";
class Pratice extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor : component being constructed");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps: Updating state based on props");
    return null;
  }
  componentDidMount() {
    console.log("component is mount ");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: Capture information from DOM before update"
    );
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component has updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted");
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </>
    );
  }
}
export default Pratice;
