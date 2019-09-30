import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: block;
  padding: 5px;
  margin: 10px 0;
  width: 300px;
  border: 1px solid #bbb;
`;

class Todo extends React.Component {
  render() {
    const { todoItem, handleTodoItemClick } = this.props;

    console.log("Todo.js todoItem", todoItem);

    if (!todoItem) {
      return null;
    }

    let lineThroughToggle = { textDecoration: "none" };

    if (todoItem.completed) {
      lineThroughToggle = { textDecoration: "line-through" };
    }

    return (
      <StyledDiv
        onClick={() => handleTodoItemClick(todoItem.id)}
        style={lineThroughToggle}>
        {todoItem.task}
      </StyledDiv>
    );
  }
}

export default Todo;
