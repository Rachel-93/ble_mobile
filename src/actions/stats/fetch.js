const NAME = 'STATS';

export const FETCH_STATS = `${NAME}/FETCH_STATS`;
export const FETCH_STATS_SUCCESS = `${NAME}/FETCH_STATS_SUCCESS`;
export const FETCH_STATS_FAIL = `${NAME}/FETCH_STATS_FAIL`;

export const fetchStats = () => ({
  type: FETCH_STATS,
});

export const fetchStatsSuccess = data => ({
  type: FETCH_STATS_SUCCESS,
  data,
});

export const fetchStatsFail = error => ({
  type: FETCH_STATS_FAIL,
  error,
});

