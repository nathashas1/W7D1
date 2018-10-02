const allTodos = (state) => {
  let todoAll = Object.keys(state.todos);
  return(todoAll.map( todoIds => ( state[todoIds])));
};

export default allTodos;
// export const allTodos = ({todos}) => Object.keys(todos).map(id => todos[id]);
