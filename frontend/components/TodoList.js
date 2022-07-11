import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todos">
        {this.props.todos.map((todo) => (
          <Todo
            toggleCompleted={this.props.toggleCompleted}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
