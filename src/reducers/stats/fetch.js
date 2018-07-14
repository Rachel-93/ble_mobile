import Actions from 'actions';

const getDefaultState = () => ({ data: [], isLoading: false, error: null });

function fetch(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.FETCH_STATS:
      return {
        data: [],
        isLoading: true,
        error: null,
      };
    case Actions.FETCH_STATS_SUCCESS:
      return {
        data: action.data,
        isLoading: false,
        error: null,
      };
    case Actions.FETCH_STATS_FAIL:
      return {
        data: [],
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default fetch;
