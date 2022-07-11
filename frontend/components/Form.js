import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            value={this.props.inputText}
            onChange={this.props.onChange}
          />
          <input type="submit" value="Add" />
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
        </form>
      </>
    );
  }
}
