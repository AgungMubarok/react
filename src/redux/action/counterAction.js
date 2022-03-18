export function addCounter(state) {
  return {
    type: 'ADD_COUNTER',
    addCounter: state + 1,
  };
}

export function decCounter(state) {
  console.log(state);
  return {
    type: 'DEC_COUNTER',
    decCounter: state - 1,
  };
}
