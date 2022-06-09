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
      const arrayItems = [...state.arrayItems, state.value];
      return {
        arrayItems,
        value: "",
      };
    });
  };

  resetArray = () => {
    this.setState({ arrayItems: [] });
  };

  removeLi = (item) => {
      this.setState((state) => {
        const arrayItems = state.arrayItems.filter(value => item !== value)
        return {
            arrayItems
        }
      })
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
          <button type="button" onClick={this.resetArray}>
            Reset
          </button>
        </div>

        <ul>
          {this.state.arrayItems.map((item) => (
            <li key={item}>
              {item}
              <button type="button" onClick={this.removeLi.bind(this, item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
