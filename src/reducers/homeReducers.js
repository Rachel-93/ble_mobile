import { FETCH_WEATHER, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/Home';

const homeReducers = (weather = {}, action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedWeather;
        case FETCH_FAILED:
            return [];
        default:
            return weather;
    }
};

export default homeReducers;