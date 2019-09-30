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

    if (!todoItem) {
      return null;
    }

    return <StyledDiv onClick={handleTodoItemClick}>{todoItem.task}</StyledDiv>;
  }
}

export default Todo;
