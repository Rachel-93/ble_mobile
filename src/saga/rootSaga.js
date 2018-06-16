import { call, all } from 'redux-saga/effects';
import { watchFetchWeather } from './weatherSaga';

export default function* rootSaga(){
    yield call(watchFetchWeather);
}