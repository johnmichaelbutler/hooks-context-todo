import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { DispatchContext } from './context/todos.context';


export default function EditTodoForm({id, toggleIsEditing, task}) {
  const [value, handleChange, reset ] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({type: 'EDIT', id: id, task: value});
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