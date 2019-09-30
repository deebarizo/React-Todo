import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

// import styled from "styled-components";

// const StyledP = styled.p`
//   color: red;
// `;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: [],
      todoItem: {
        task: "",
        id: Date.now(),
        completed: false
      }
    };
  }

  handleTodoItemClick = event => {
    event.target.style.textDecoration = "line-through";
  };

  handleInputChange = event => {
    this.setState({
      todoItem: {
        task: event.target.value,
        id: Date.now(),
        completed: false
      }
    });
  };

  onEnter = () => {
    this.handleAddTodo();
  };

  handleAddTodo = () => {
    const task = this.state.todoItem.task.trim();

    if (task !== "") {
      const todoItem = this.state.todoItem;
      todoItem.task = task;

      this.setState({
        todoItems: [...this.state.todoItems, todoItem],
        todoItem: {
          task: "",
          id: Date.now(),
          completed: false
        }
      });
    }
  };

  handleClearCompleted = () => alert("Clear Completed");

  render() {
    const { todoItem, todoItems } = this.state;

    console.log("App todoItem", todoItem);
    console.log("App todoItems", todoItems);

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoItems={todoItems}
          handleTodoItemClick={this.handleTodoItemClick}
        />
        <TodoForm
          todoItem={todoItem}
          handleInputChange={this.handleInputChange}
          handleAddTodo={this.handleAddTodo}
          onEnter={this.onEnter}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
