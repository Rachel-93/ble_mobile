import { connect } from 'react-redux';
import  HomeComponent from '../components/HomeComponent';
import { fetchWeatherAction, fetchSuccessAction, fetchFailedAction } from '../actions';

const mapStateToProps = (state) => {
    weather: state.homeReducers
    
    // return {
    //     forecast: state.data.query.results.channel.item.forecast,
    //     condition: state.data.query.results.channel.item.condition,
    //     location: state.data.query.results.channel.location
    // };
};

// const mapDispatchToProps = (dispatch) => {
//     onFetchWeather: () => {
//         dispatch(fetchWeatherAction());
//     }
// }

const mapDispatchToProps = { fetchWeatherAction };
    
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;