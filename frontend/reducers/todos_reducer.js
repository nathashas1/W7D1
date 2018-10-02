import { RECEIVE_TODO , RECEIVE_TODOS } from '../actions/action.js';
import merge from 'lodash/merge';







const todoReducer = (state = initialStateTodos, action) => {
  //ES6 spread function with object?

  // debugger;
  switch(action.type){

    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      return merge({},state, newTodo);

    case RECEIVE_TODOS:
      const newTodos = {};
      action.todos.forEach( todo => {
        newTodos[todo.id] = todo;
      });
      return newTodos;

    default:
      return state;
  }
};

export default todoReducer;
