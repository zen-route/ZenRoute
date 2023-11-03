import React, {useEffect} from 'react';
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from '../../navigation/AuthenticationRoutes';
import {View, StyleSheet, Text} from 'react-native';
import AnimalIllustration from '../../assets/svgs/Animal';
import Logo from '../../assets/svgs/Logo';

const InitialStartScreen = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'Initial'>) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboard');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.firstContainer}>
      <View style={styles.innerCircle}>
        <AnimalIllustration />
      </View>
      <View style={styles.logoWrapper}>
        <Logo />
      </View>
      <Text style={styles.textStyle}>Explore your city with Zoro</Text>
    </View>
  );
};

export default InitialStartScreen;

const styles = StyleSheet.create({
  firstContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1947E5',
  },
  innerCircle: {
    width: 275,
    height: 275,
    borderRadius: 150,
    backgroundColor: '#FFBD12',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
