import React from 'react';
import Emoji from 'react-native-emoji';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const isoCountries = {
  Argentina: 'flag-ar',
  Australia: 'flag-au',
  Belgium: 'flag-be',
  Brazil: 'flag-br',
  Colombia: 'flag-co',
  'Costa Rica': 'flag-cr',
  Croatia: 'flag-hr',
  Denmark: 'flag-dk',
  Egypt: 'flag-eg',
  France: 'flag-fr',
  Germany: 'flag-ge',
  Iceland: 'flag-is',
  Iran: 'flag-ir',
  Japan: 'flag-jp',
  'Korea Republic': 'flag-kr',
  Mexico: 'flag-mx',
  Morocco: 'flag-ma',
  Nigeria: 'flag-ng',
  Panama: 'flag-pa',
  Peru: 'flag-pe',
  Poland: 'flag-pl',
  Portugal: 'flag-pt',
  Russia: 'flag-ru',
  'Saudi Arabia': 'flag-sa',
  Senegal: 'flag-sn',
  Serbia: 'flag-rs',
  Spain: 'flag-es',
  Sweden: 'flag-se',
  Switzerland: 'flag-ch',
  Tunisia: 'flag-tn',
  England: 'flag-gb',
  Uruguay: 'flag-uy',
};

function getCountryCode(countryName) {
  if (Object.prototype.hasOwnProperty.call(isoCountries, countryName)) {
    return isoCountries[countryName];
  }
  return countryName;
}

const Stats = ({ groupLetter, data, onPress }) => (
  <View>
    <View style={styles.thead}>
      <Text
        onPress={onPress}
        style={{ fontSize: 16, color: 'steelblue' }}
      >{`Group ${groupLetter}`}
      </Text>
    </View>
    <View style={styles.section}>
      <View style={styles.tr}>
        <Text style={styles.td}>Flag</Text>
        <Text style={styles.td}>Country </Text>
        <Text style={styles.td}>Pts </Text>
      </View>
      { data.map(e => (
        <View key={e.id} style={styles.tr}>
          <Text style={styles.td}><Emoji name={getCountryCode(e.country)} /></Text>
          <Text style={styles.td}>{e.country}</Text>
          <Text style={styles.td}>{e.points}</Text>
        </View>))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  td: {
    flexDirection: 'row',
    width: Dimensions.get('window').width / 3,
    margin: 10,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'stretch',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
  },
  tr: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    borderRadius: 4,
  },
  thead: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
});

export { Stats };
