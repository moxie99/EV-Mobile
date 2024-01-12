import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AppMapView from '../components/AppMapView';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { UserLocationContext } from '../Context/UserLocationContext';
import GlobalApi from '../utils/GlobalApi';

const HomeScreen = () => {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      includedTypes: ['electric_vehicle_charging_station'],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location?.latitude,
            longitude: location?.longitude,
          },
          radius: 5000.0,
        },
      },
    };
    GlobalApi.NewNearByPlace(data).then((resp) => {
      setPlaceList(resp.data);
      console.log(resp.data?.places);
    });
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar searchedLocation={(location) => console.log(location)} />
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
    width: '100%',
    paddingHorizontal: 20,
  },
});
