import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
// @ts-ignore
import {MAPBOX_SECRET_TOKEN} from 'react-native-dotenv';
import {TEMP_TEST_ROUTES, getRoutesFromDirections} from '../../constants/map';
import Header from '../../components/Header';
import useAuthStore from '../../store/AuthStore';
import Loading from '../../components/Loading';
import RouteRender from '../../components/RouteRender';
import {Feature, LineString, Properties} from '@turf/helpers';
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(MAPBOX_SECRET_TOKEN);
MapboxGL.setConnected(true);

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const MapView = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [route, setRoute] = React.useState<Feature<
    LineString,
    Properties
  > | null>(null);
  const userLocation = useAuthStore(state => state.userLocation);
  console.log('USER LOCATION: ', userLocation);
  const getRoute = () => {
    setLoading(true);
    const routes = getRoutesFromDirections({
      directions: TEMP_TEST_ROUTES,
    });
    setRoute(routes);
    setLoading(false);
  };
  if (!userLocation) {
    return <Loading />;
  }

  const handleBack = () => {};
  return !loading ? (
    <View style={styles.page}>
      <Header onBack={handleBack} theme="WHITE" text="Directions" />
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          onDidFinishLoadingMap={() => {
            getRoute();
          }}>
          {route && <RouteRender route={route} />}
          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={[77.4472939, 12.9771523]}
            animationMode="flyTo"
            animationDuration={1200}
          />
        </MapboxGL.MapView>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default MapView;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
  },
  container: {
    height: HEIGHT - 180,
    width: WIDTH,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
