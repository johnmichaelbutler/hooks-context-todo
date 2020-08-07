import {useState} from 'react';

function useToggleState(initialVal = false) {
  const [state, setState] =  useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggleState;

// Call useState
// return piece of state and a function to toggle it