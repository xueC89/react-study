import React, { Component } from "react";
import ReactDOM from "react-dom";
// import CommentApp from './CommentApp';
import "./index.css";

/* ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
);
 */

function wrapWithLoadData(WrappedComponent, name) {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = { data: null };
    }

    componentWillMount() {
      let data = localStorage.getItem(name);
      this.setState({ data });
    }

    render() {
      return <WrappedComponent data={this.state.data} />;
    }
  }
  return NewComponent;
}

class InputWithUserName extends Component {
  render() {
    return <input value={this.props.data} />;
  }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, "username");

ReactDOM.render(<InputWithUserName />, document.getElementById("root"));
