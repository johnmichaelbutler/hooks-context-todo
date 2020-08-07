import uuid from 'uuid/v4';

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD":
      return [...state, {id: uuid(), task: action.task, completed: false}];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? {...state, completed: !todo.completed} : todo);
    case 'EDIT':
      return state.map(todo => todo.id === action.id ? { ...state, task: action.task} : todo);
    default:
      return state;
  }
};

export default reducer;

// {type: "ADD", task: "walk the dog"}
// {type: "REMOVE", id: 1}
// {type: "TOGGLE", id: 1}
// {type: "EDIT", id: 1, task: "walk the dog"}
