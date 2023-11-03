/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ONBOARD_DATA} from '../../constants/onbaord';
import SimpleButton from '../../components/Button';
import OnboardNextButton from '../../components/OnboardNextButton';
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from '../../navigation/AuthenticationRoutes';

interface ISliderDotProps {
  isActive: boolean;
}
const SliderDot = ({isActive}: ISliderDotProps) => {
  return (
    <View
      style={{
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: isActive ? '#F95A2C' : 'white',
        borderWidth: !isActive ? 1 : 0,
        borderColor: !isActive ? 'black' : '',
      }}
    />
  );
};
const Onboard = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'Onboard'>) => {
  const [currIdx, setCurrIdx] = React.useState(0);

  const goToNext = () => {
    setCurrIdx(prevIdx => prevIdx + 1);
  };

  const getStarted = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={styles.onboardWrapper}>
      <View style={styles.onboardInnerWrapper}>
        <View style={styles.onboardImageWrapper}>
          {ONBOARD_DATA[currIdx].image}
        </View>
        <Text style={styles.onboardHeading}>
          {ONBOARD_DATA[currIdx].heading}
        </Text>
        <Text style={styles.onboardingSubHeading}>
          {ONBOARD_DATA[currIdx].subHeading}
        </Text>
      </View>
      <View style={styles.onboardBottomWrapper}>
        {currIdx !== 3 && (
          <View style={styles.onboardNormalWrapper}>
            <View style={styles.dotsWrapper}>
              <SliderDot isActive={currIdx === 0} />
              <SliderDot isActive={currIdx === 1} />
              <SliderDot isActive={currIdx === 2} />
            </View>
            <View style={styles.nextButtonWrapper}>
              <OnboardNextButton onPress={goToNext} />
            </View>
          </View>
        )}
        {currIdx === 3 && (
          <SimpleButton onPress={getStarted} text="Get Started" theme="DARK" />
        )}
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  onboardWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  onboardImageWrapper: {
    marginVertical: 20,
  },
  onboardHeading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
  },
  onboardingSubHeading: {
    fontFamily: 'Montserrat-Regular',
    color: '#474A57',
    fontSize: 16,
    textAlign: 'center',
  },
  onboardInnerWrapper: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  onboardBottomWrapper: {
    width: '100%',
    paddingHorizontal: 15,
  },
  zeroIndexWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '40%',
  },
  onboardNormalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  dotsWrapper: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextButtonWrapper: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
