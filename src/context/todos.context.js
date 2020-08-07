import React, { createContext } from 'react';
import useTodoState from '../useTodoState';

export const TodosContext = createContext();

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false},
  { id: 2, task: "Feed the cat", completed: true}
]

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}