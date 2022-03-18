export const getMovie = () => {
  return async dispatch => {
    dispatch({
      type: 'GET_REQUEST_MOVIE',
    });

    try {
      const getData = await fetch(
        'http://www.omdbapi.com/?apikey=faf7e5bb&s=batman'
      );
      const data = await getData.json();

      dispatch({
        type: 'GET_MOVIE_SUCCESS',
        payload: data.Search,
      });
    } catch (error) {
      dispatch({
        type: 'GET_MOVIE_FAILED',
        error: error,
      });
    }
  };
};
