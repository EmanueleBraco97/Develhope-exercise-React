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



            {/* passiamo al render l'array, e la funzione che abbiamo utilizzato per eliminare elemento */}
        <ul>
        {this.props.render(this.state.arrayItems, this.removeLi)}
        </ul>
      </div>
    );
  }
}
