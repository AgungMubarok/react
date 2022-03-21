export function addCounter(dispatch, state) {
  return dispatch({
    type: 'ADD_COUNTER',
    addCounter: state + 1,
  });
}

export function decCounter(dispatch, state) {
  return dispatch({
    type: 'DEC_COUNTER',
    decCounter: state - 1,
  });
}
