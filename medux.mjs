const redux = {
  createStore: function(reducer, initState, optionalArg) {

    var currentReducer = reducer;
    var currentState = initState || {};

    return {
      getState: function() {
        return currentState;
      },
      dispatch: function(action) {
        return currentState = currentReducer(currentState, action);
      }
    }
  }
}

export default redux;
