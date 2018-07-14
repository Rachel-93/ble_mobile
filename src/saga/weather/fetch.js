import { takeLatest, all, fork, put, call } from 'redux-saga/effects';
import Actions from 'actions';
import * as api from 'api';

function* fetchWeather() {
  try {
    const response = yield call(api.fetchWeather);
    if (response.status === 200) {
      const { data } = response;
      yield put(Actions.fetchWeatherSuccess(data.query.results.channel));
    }
  } catch (error) {
    yield put(Actions.fetchWeatherFail(error));
  }
}

function* watchFetchWeather() {
  yield takeLatest(Actions.FETCH_WEATHER, fetchWeather);
}

export default function* fetch() {
  yield all([
    fork(watchFetchWeather),
  ]);
}
