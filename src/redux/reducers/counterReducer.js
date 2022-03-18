const initialState = {
  counterAddOne: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return {
        counterAddOne: action.addCounter,
      };
    case 'DEC_COUNTER':
      return {
        counterAddOne: action.decCounter,
      };
    default:
      return state;
  }
};
