const todoState = (state = [{id: 1, title: 'create todos', body: 'see above', completed: false}], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.payload])
      case 'TOGGLE_TODO':
        const newToggleState = [...state]
        const todoToToggle = newToggleState.find(todo => todo.id === action.payload)
        todoToToggle.completed = !todoToToggle.completed
        return newToggleState
      case 'DELETE_TODO':
        const newDeleteState = [...state]
        const todoToDelete = newDeleteState.findIndex(todo => todo.id === action.payload)
        newDeleteState.splice(todoToDelete, 1)
        return newDeleteState
      default:
        return state
    }
  }

  export default todoState;