const NAME = 'WEATHER';

export const FETCH_WEATHER = `${NAME}/FETCH_WEATHER`;
export const FETCH_WEATHER_SUCCESS = `${NAME}/FETCH_WEATHER_SUCCESS`;
export const FETCH_WEATHER_FAIL = `${NAME}/FETCH_WEATHER_FAIL`;

export const fetchWeather = () => ({
  type: FETCH_WEATHER,
});

export const fetchWeatherSuccess = data => ({
  type: FETCH_WEATHER_SUCCESS,
  data,
});

export const fetchWeatherFail = error => ({
  type: FETCH_WEATHER_FAIL,
  error,
});

