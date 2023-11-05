import React from 'react';
import {View, Text} from 'react-native';
import useAuthStore from '../../store/AuthStore';
import Header from '../../components/Header';
import {HomeRoutes} from '../../navigation/HomeRoutes';
import {StackNavigationProps} from '../../navigation/AppRoutes';
import SimpleButton from '../../components/Button';

const RecommendedPaths = ({
  navigation,
}: StackNavigationProps<HomeRoutes, 'RecommendedPaths'>) => {
  const paths = useAuthStore(state => state.paths);
  //   const source = useAuthStore(state => state.source);
  //   const destination = useAuthStore(state => state.destination);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Header
        onBack={() => {
          navigation.goBack();
        }}
        theme="BLUE"
        text="Plan Ride"
      />
      <View style={{width: '100%', marginTop: 40}}>
        {paths.map(path => (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15
            }}>
            <View
              style={{
                width: '90%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  color: 'black',
                  fontSize: 14,
                  width: '30%',
                }}>
                {path[2].map(node => node[0].toString()).join(' -> ')}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  color: 'black',
                  fontSize: 14,
                }}>
                {(path[1] / 60).toFixed(2)} Hours
              </Text>

              <View style={{width: '20%'}}>
                <SimpleButton
                  onPress={() => navigation.navigate('MapView')}
                  text="Get Dir"
                  theme="DARK"
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecommendedPaths;
