import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Stats } from '../components';

class StatsComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('otherParams', 'Stats'),
  });

  static propTypes = {
    fetchStats: PropTypes.func.isRequired,
    stats: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetchStats();
  }

  render() {
    const { stats, isLoading } = this.props;

    const groupA = [];
    const groupB = [];
    const groupC = [];
    const groupD = [];
    const groupE = [];
    const groupF = [];
    const groupG = [];
    const groupH = [];

    function populateStats() {
      for (i = 0; i < stats.length; i += 1) {
        switch (stats[i].group_letter) {
          case 'A':
            groupA.push(stats[i]);
            break;
          case 'B':
            groupB.push(stats[i]);
            break;
          case 'C':
            groupC.push(stats[i]);
            break;
          case 'D':
            groupD.push(stats[i]);
            break;
          case 'E':
            groupE.push(stats[i]);
            break;
          case 'F':
            groupF.push(stats[i]);
            break;
          case 'G':
            groupG.push(stats[i]);
            break;
          case 'H':
            groupH.push(stats[i]);
            break;
          default:
            break;
        }
      }
    }

    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <ScrollView style={styles.container}>
        {populateStats()}
        <Stats groupLetter="A" data={groupA} onPress={() => this.props.navigation.navigate('Details')} />
        <Stats groupLetter="B" data={groupB} />
        <Stats groupLetter="C" data={groupC} />
        <Stats groupLetter="D" data={groupD} />
        <Stats groupLetter="E" data={groupE} />
        <Stats groupLetter="F" data={groupF} />
        <Stats groupLetter="G" data={groupG} />
        <Stats groupLetter="H" data={groupH} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

const mapStateToProps = state => ({
  stats: state.stats.fetch.data,
  isLoading: state.stats.fetch.isLoading,
});

const mapDispatchToProps = {
  fetchStats: Actions.fetchStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);
