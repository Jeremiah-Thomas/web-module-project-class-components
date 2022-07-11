import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: "",
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { name: this.state.inputText, id: Date.now(), completed: false },
      ],
    });
    this.setState({ inputText: "" });
    this.forceUpdate();
  };

  onChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  clearCompleted = () => {
    // if item is purchased (item.purchased is true) the filter out the item
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <Form
          onSubmit={this.addTodo}
          inputText={this.state.inputText}
          onChange={this.onChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
