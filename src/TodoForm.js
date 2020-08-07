import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { TodosContext } from './context/todos.context';

export default function TodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
      <form onSubmit={e => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TextField margin="normal" label="Add New Todo" value={value} onChange={handleChange} />
      </form>
    </Paper>
  )
}