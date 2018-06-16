// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import { REQUEST_API_DATA, receiveApiData } from '../actions/Home';
// import { fetchData } from '../api/Home';

// function* getApiData(action){
//     try{
//         const data = yield call(fetchData);
//         yield put(receiveApiData(data));
//     }catch (e){
//         console.log(e);
//     }
// }

// export default function* mySaga(){
//     yield takeLatest(REQUEST_API_DATA, getApiData);
// }

const urlGetWeather = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22singapore%2C%20sg%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

function* getWeatherFromApi(){
    const response = yield fetch(urlGetWeather, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: ''
    });
    const weather = yield response.status === 200 ? response.json() : [];
  
    return weather;
}

export const Api = {
    getWeatherFromApi
};

// export const fetchData = async () => {
//     try {

//         const response = await fetch("");
//         const data = await response.json();
        
//         return data;
//         // const response = await fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22singapore%2C%20sg%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys");
//         // const data = await response.json();
//         // return data;
//     } catch (e) {
//         console.log(e);
//     }

// }