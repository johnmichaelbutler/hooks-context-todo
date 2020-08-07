import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todo.reducer';

export const TodosContext = createContext();

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false},
  { id: 2, task: "Feed the cat", completed: true}
]

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  )
}