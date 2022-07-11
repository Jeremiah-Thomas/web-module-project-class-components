import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          value={this.props.inputText}
          onChange={this.props.onChange}
        />
        <button type="submit">Add</button>
        <button onClick={this.props.clear}>Clear Completed</button>
      </form>
    );
  }
}
