import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../utils/Colors';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchedLocation }) => {
  return (
    <View style={styles.searchBarStyle}>
      <Ionicons
        name='location-sharp'
        size={24}
        color={Colors.GRAY}
        style={{ paddingTop: 10 }}
      />
      <GooglePlacesAutocomplete
        placeholder='Search EV Charging Station close by...'
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          searchedLocation(details?.geometry?.location);
        }}
        query={{
          key: 'AIzaSyC5NT7KFyWH3Zd7vWg5CroSvadsxHIqJ2Q',
          language: 'en',
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 5,
    backgroundColor: Colors.WHITE,
    borderRadius: 6,
  },
});
