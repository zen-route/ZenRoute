import React, {useEffect} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {ILocationProp} from '../../types/constantT/location.type';
import useAuthStore from '../../store/AuthStore';
import SimpleButton from '../../components/Button';
import {StackNavigationProps} from '../../navigation/AppRoutes';
import {HomeRoutes} from '../../navigation/HomeRoutes';

const Home = ({navigation}: StackNavigationProps<HomeRoutes, 'Home'>) => {
  const [currentLocation, setCurrentLocation] =
    React.useState<ILocationProp | null>(null);
  const setUserLocation = useAuthStore(state => state.setUserLocation);

  useEffect(() => {
    const requestForLocationIfNotGranted = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'ZenRoute needs access to your location ',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.requestAuthorization(() => console.log('DONE'));
          Geolocation.getCurrentPosition(
            position => {
              console.log('POS:', position);
              setCurrentLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                altitude: position.coords.altitude,
                accuracy: position.coords.accuracy,
              });
              setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            error => {
              console.log('ERROR: ', error);
            },
            {enableHighAccuracy: false, timeout: 50000},
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestForLocationIfNotGranted();
  }, [setUserLocation]);

  return (
    <View>
      <Text style={styles.textStyle}>Hello Home</Text>
      <Text style={styles.textStyle}>
        {currentLocation ? JSON.stringify(currentLocation) : 'No location'}
      </Text>
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{width: '50%'}}>
          <SimpleButton
            onPress={() => {
              navigation.navigate('PlanRide');
            }}
            text="Plan Ride"
            theme="DARK"
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
});
