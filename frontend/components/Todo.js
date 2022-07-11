import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`todo ${this.props.todo.completed ? "completed" : ""}`}
        onClick={() => this.props.toggleCompleted(this.props.todo.id)}
      >
        {this.props.todo.name}
      </div>
    );
  }
}
