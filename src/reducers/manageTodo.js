export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('ADD_TODO', action.payload)

      const todo = {
        id: Math.random()*10000000000000000,
        text: action.payload.text
      }

      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      console.log('DELETE_TODO', state)
      const stateCopy = [...state.todos]
      const filterText = stateCopy.filter(todo => todo.id !== action.payload)
      console.log(filterText)

      return { todos: filterText }

    default:
      return state;
  }
}
