import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
