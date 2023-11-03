import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginSVG from '../../assets/svgs/LoginSVG';
import MailIcon from '../../assets/svgs/MailIcon';
import FacebookIcon from '../../assets/svgs/FacebookIcon';
import TwitterIcon from '../../assets/svgs/TwitterIcon';
import SimpleButton from '../../components/Button';
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from '../../navigation/AuthenticationRoutes';

const Login = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'Login'>) => {
  const loginWithEmail = () => {
    navigation.navigate('Login2');
  };
  return (
    <View style={styles.loginWrapper}>
      <LoginSVG />
      <View style={styles.loginModalWrapper}>
        <Text style={styles.loginHeaderTextStyle}>Login</Text>
        <Text style={styles.loginSubHeaderTextStyle}>
          You don’t think you should login first and behave like human not
          robot.
        </Text>
        <View style={styles.simpleButtonWrapper}>
          <SimpleButton
            onPress={loginWithEmail}
            text="Email"
            theme="DARK"
            icon={<MailIcon />}
          />
        </View>
        <View style={styles.simpleButtonWrapper}>
          <SimpleButton
            onPress={() => {}}
            text="Facebook"
            theme="LIGHT"
            icon={<FacebookIcon />}
            backgroundColorr={'#1947E5'}
          />
        </View>
        <View style={styles.simpleButtonWrapper}>
          <SimpleButton
            onPress={() => {}}
            text="Twitter"
            theme="LIGHT"
            icon={<TwitterIcon />}
            backgroundColorr={'#00C6AE'}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginWrapper: {
    backgroundColor: '#FFBD12',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginModalWrapper: {
    width: '90%',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    position: 'absolute',
    bottom: 20,
    paddingVertical: 15,
  },
  loginHeaderTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
  },
  loginSubHeaderTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginVertical: 10,
  },
  simpleButtonWrapper: {
    marginVertical: 10,
    width: '100%',
  },
});
