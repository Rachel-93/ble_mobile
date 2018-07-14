import { all, fork } from 'redux-saga/effects';
import fetch from './fetch';

export default function* weather() {
  yield all([
    fork(fetch),
  ]);
}
