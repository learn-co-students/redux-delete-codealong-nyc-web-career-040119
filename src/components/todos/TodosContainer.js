import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} delete={this.props.delete} />)

  render() {
    console.log('TodosContainer props', this.props)
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => {
      dispatch({ type: 'DELETE_TODO', payload: todoText })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
