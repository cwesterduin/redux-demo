const todoState = (state = [{id: 1, title: 'create todos', body: 'see above', completed: false}], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.payload])
      case 'TOGGLE_TODO':
        console.log(action.payload)
        const newState = [...state]
        const todoToToggle = newState.find(todo => todo.id === action.payload)
        todoToToggle.completed = !todoToToggle.completed
        return newState
      default:
        return state
    }
  }

  export default todoState;