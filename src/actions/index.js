import { FETCH_WEATHER, FETCH_SUCCEEDED, FETCH_FAILED } from './Home';

export const fetchWeatherAction = () => {
    return {
        type: FETCH_WEATHER
    }
}

// Action sent by Redux-saga
export const fetchSuccessAction = (receivedWeather) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedWeather
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}