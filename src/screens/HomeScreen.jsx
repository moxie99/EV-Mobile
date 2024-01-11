import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppMapView from '../components/AppMapView';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={} />
      </View>
      <AppMapView />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
  },
});
