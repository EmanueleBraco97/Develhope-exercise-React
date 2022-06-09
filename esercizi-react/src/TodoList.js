import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      arrayItems: [],
    };
  }

  onChangeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  addInputToArray = () => {
    this.setState((state) => {
      const arrayItems = [...state.arrayItems, state.value]
      return {
        arrayItems,
        value: "",
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            name="username"
            id="username"
            value={this.state.value}
            onChange={this.onChangeValue}
          />
          <button type="button" onClick={this.addInputToArray}>
            Add
          </button>
        </div>

        <ul>
          {this.state.arrayItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
