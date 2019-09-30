import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 20px 0 7px 0;
  width: 300px;
`;

class TodoForm extends React.Component {
  render() {
    const {
      todoItem,
      handleInputChange,
      handleAddTodo,
      onEnter,
      handleClearCompleted
    } = this.props;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onEnter();
          return false;
        }}>
        <StyledInput
          onChange={handleInputChange}
          id="todo-input"
          placeholder="What do you need to do?"
          value={todoItem.task}
        />
        <button type="button" onClick={handleAddTodo}>
          Add Todo
        </button>
        <button type="button" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
