import { FETCH_WEATHER, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/Home';
// Saga Effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchWeather(){
    try{
        const receivedWeather = yield Api.getWeatherFromApi();
        yield put({ type: FETCH_SUCCEEDED, receivedWeather: receivedWeather });
    } catch (error){
        yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchFetchWeather(){
    yield takeLatest(FETCH_WEATHER, fetchWeather);
}