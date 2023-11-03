import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Login2SVG from '../../assets/svgs/Login2SVG';
import CrossIcon from '../../assets/svgs/CrossIcon';
import CustomTextInput from '../../components/Input';
import FancyButton from '../../components/FancyButton';
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from '../../navigation/AuthenticationRoutes';
import useAuthStore from '../../store/AuthStore';

const Login2 = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'Login2'>) => {
  const [email, setEmail] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);

  const signIn = useAuthStore(state => state.signIn);

  const navigateToSignUp = () => {
    navigation.navigate('Signup');
  };

  console.log('EMAIL: ', email);
  console.log('PASSWORD: ', password);

  const handleSignIn = async () => {
    signIn();
  };

  return (
    <View style={styles.login2Wrapper}>
      <Login2SVG />
      <View style={styles.signInWrapper}>
        <View style={styles.signInInnerWrapper}>
          <Text style={styles.welcomeTextStyle}>Welcome Back</Text>
          <CrossIcon />
        </View>
        <View style={styles.textInputUpperWrapper}>
          <View style={styles.textInputWrapper}>
            <CustomTextInput
              onTextChange={setEmail}
              placeholder="Email"
              type="email-address"
            />
          </View>
          <View style={styles.textInputWrapper}>
            <CustomTextInput
              onTextChange={setPassword}
              placeholder="Password"
              type="ascii-capable"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <View style={styles.buttonInnerWrapper}>
              <FancyButton onPress={handleSignIn} text="Sign In" />
            </View>
          </View>

          <View style={styles.navContainer}>
            <Text style={styles.normalText}>You are new ? </Text>
            <Pressable onPress={navigateToSignUp}>
              <Text style={styles.innerNormalNavTextStyle}>Create New</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login2;

const styles = StyleSheet.create({
  login2Wrapper: {
    backgroundColor: '#F95A2C',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  signInWrapper: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth: 10,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderColor: 'black',
    position: 'absolute',
    bottom: 0,
  },
  welcomeTextStyle: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
  signInInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '100%',
  },
  textInputWrapper: {
    marginVertical: 10,
    width: '90%',
  },
  textInputUpperWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInnerWrapper: {
    width: '90%',
    marginTop: 40,
  },
  navContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  normalText: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    fontSize: 14,
  },
  innerNormalNavTextStyle: {
    fontFamily: 'Montserrat-Bold',
    color: '#F95A2C',
    fontSize: 14,
  },
});
