import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todo.reducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false},
  { id: 2, task: "Feed the cat", completed: true}
]

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
