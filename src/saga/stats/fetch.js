import { takeLatest, all, fork, put, call } from 'redux-saga/effects';
import Actions from 'actions';
import * as api from 'api';

function* fetchStats() {
  try {
    const response = yield call(api.fetchStats);
    if (response.status === 200) {
      const { data } = response;
      yield put(Actions.fetchStatsSuccess(data));
    }
  } catch (error) {
    yield put(Actions.fetchStatsFail(error));
  }
}

function* watchFetchStats() {
  yield takeLatest(Actions.FETCH_STATS, fetchStats);
}

export default function* fetch() {
  yield all([
    fork(watchFetchStats),
  ]);
}
