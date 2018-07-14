import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: navigation.getParam('otherParams', null),
    });

    static propTypes = {
      fetchWeather: PropTypes.func.isRequired,
      weather: PropTypes.object.isRequired,
      isLoading: PropTypes.bool.isRequired,
    }

    componentDidMount() {
      this.props.fetchWeather();
    }

    render() {
      const { weather, isLoading } = this.props;
      if (isLoading) {
        return <ActivityIndicator size="large" />;
      }

      return (
        <View style={styles.container}>
          <View style={styles.section}>
            <Text
              adjustsFontSizeToFit
              style={styles.headingDate}
            >
              {JSON.stringify(weather)}
            </Text>
          </View>
          <View style={styles.section}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.headingCelcius}
            />
          </View>
          <View style={styles.section}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.headingWeather}
            />
          </View>

        </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingDate: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headingCelcius: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 40,
  },
  headingWeather: {
    textAlign: 'center',
    fontSize: 20,
    color: '#7e7e7e',
  },
  listContainer: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
  },
  subtitleView: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  txtDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  txtCelcius: {
    fontSize: 11,
  },
  txtWeather: {
    fontSize: 11,
    color: '#7e7e7e',
  },
});

const mapStateToProps = state => ({
  weather: state.weather.fetch.data,
  isLoading: state.weather.fetch.isLoading,
});

const mapDispatchToProps = {
  fetchWeather: Actions.fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
