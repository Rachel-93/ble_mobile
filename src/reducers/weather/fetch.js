import Actions from 'actions';

const getDefaultState = () => ({ data: {}, isLoading: false, error: null });

function fetch(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.FETCH_WEATHER:
      return {
        data: {},
        isLoading: true,
        error: null,
      };
    case Actions.FETCH_WEATHER_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null,
      };
    case Actions.FETCH_WEATHER_FAIL:
      return {
        data: {},
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default fetch;
