import { Component } from "react";
export default class Pratice2 extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  toggleCompo = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <h1>Toggle component..</h1>
        <button onClick={this.toggleCompo}>
          Toggle{this.state.toggle ? "A" : "B"}
        </button>
        {this.state.toggle ? <ComponentA /> : <ComponentB />}
      </>
    );
  }
}

class ComponentA extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Component A mount");
  }
  componentWillUnmount() {
    console.log("Component A unmount");
  }
  render() {
    return <>Component A...</>;
  }
}

class ComponentB extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Component B mount");
  }
  componentWillUnmount() {
    console.log("Component B unmount");
  }

  render() {
    return <>Component B...</>;
  }
}
