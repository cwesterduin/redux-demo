const todoState = (state = [{title: 'create todos', body: 'see above'}], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat([action.payload])
      default:
        return state
    }
  }

  export default todoState;