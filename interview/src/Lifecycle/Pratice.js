import { Component } from "react";

export default class Pratice1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading : false,
    };

    this.abortController = new AbortController();
  }
  fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    console.log("abort");
    this.abortController.abort();
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        componentDidMount
        <ul>
          {this.state.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
