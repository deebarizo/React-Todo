import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    const { todoItems, handleTodoItemClick } = this.props;

    return (
      <div>
        {todoItems.map(todoItem => {
          return (
            <Todo
              key={todoItem.id}
              todoItem={todoItem}
              handleTodoItemClick={handleTodoItemClick}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
