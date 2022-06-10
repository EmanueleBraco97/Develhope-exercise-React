import React from "react";

export class Container extends React.Component {
  state = {};
  render() {
    return <div className="container bg-white border-solid border-2 border-red-700">
                <div>{this.props.title}</div>
                <div>{this.props.children}</div>
            </div>;
  }
}
