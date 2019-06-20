export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: state.todos.concat(action.payload.text) };

    case "DELETE_TODO":
      return {
        todos: state.todos.slice(0, action.payload).concat(state.todos.slice(action.payload + 1))
      }

    default:
      return state;
  }
}
