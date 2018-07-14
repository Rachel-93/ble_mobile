import { all, fork } from 'redux-saga/effects';
import weather from './weather';
import stats from './stats';

export default function* root() {
  yield all([
    fork(weather),
    fork(stats),
  ]);
}
