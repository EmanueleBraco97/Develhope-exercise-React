import React from "react";

export class Container extends React.Component {
  state = {};
  render() {
    return <div className="container bg-white border-solid border-2 border-red-700">{this.props.children}</div>;
  }
}
