import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { TodosContext } from './context/todos.context';

export default function EditTodoForm({id, toggleIsEditing, task}) {
  const [value, handleChange, reset ] = useInputState(task);
  const { editTodo } = useContext(TodosContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
      }}
      style={{ marginLeft: "1rem", width: "50%"}}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}