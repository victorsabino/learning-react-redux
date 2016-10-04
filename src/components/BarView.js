import React, { Component, PropTypes } from 'react';


export default class BarView extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleTextChange(event) {
    this.props.todo.text = event.target.value;
  }

  handleAddTodo() {
    this.props.actions.addTodo(this.props.todo.text);
  }

  handleRemoveTodo(id) {
    this.props.actions.removeTodo(id);
  }

  handleMarkDone(id) {
    this.props.actions.markDoneTodo(id);
  }

  render() {
    return (
      <div className="view-container">
        <div>Hello from the 'Bar' view!</div>
        <div className="todo-container">
          <input
            type="text"
            placeholder="Learn the piano"
            onChange={(event) => {this.handleTextChange(event);}}/>
          <button onClick={() => {this.handleAddTodo();}}>Add to list</button>
          <ul>
            {
              this.props.todo.todos.map((todo, i, a) => (
              <li className={todo.done ? "done" : ""}> {todo.text} <a href="#" onClick={() => {this.handleRemoveTodo(i);}}>x</a> <a href="#" onClick={() => {this.handleMarkDone(i);}}>✓</a></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

BarView.propTypes = {
  todoText: PropTypes.string,
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};