const initialState = {
  loading: false,
  content: [],
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REQUEST_MOVIE':
      return {
        ...state,
        loading: true,
      };
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        loading: false,
        content: action.payload,
      };
    case 'GET_MOVIE_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
