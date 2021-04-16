const todoState = (state = [{title: 'create todos', body: 'see above', completed: false}], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.payload])
      default:
        return state
    }
  }

  export default todoState;