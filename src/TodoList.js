import React, { useContext } from 'react';
import { TodosContext } from './context/todos.context';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

export default function TodoList() {
  const todos = useContext(TodosContext);
  if(todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i)  => (
            <>
              <Todo
                {...todo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    )
  return null;
}