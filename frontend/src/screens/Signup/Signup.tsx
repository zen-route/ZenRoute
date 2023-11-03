import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../components/BackButton';
import CustomTextInput from '../../components/Input';
import FancyButton from '../../components/FancyButton';
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from '../../navigation/AuthenticationRoutes';

const Signup = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, 'Signup'>) => {
  const [fullName, setFullName] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);

  const onBack = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {};
  const navigateToSignIn = () => {
    navigation.navigate('Login2');
  };

  return (
    <View style={styles.signupWrapper}>
      <BackButton onPress={onBack} />
      <Text style={styles.signupHeaderText}>Sign up</Text>
      <Text style={styles.signupSubHeadingText}>
        You have chance to create new account if you really want to.{' '}
      </Text>
      <View style={styles.inputWrapper}>
        <View style={styles.inputInnerWrapper}>
          <CustomTextInput
            onTextChange={setFullName}
            placeholder="Full Name"
            type="ascii-capable"
          />
        </View>
        <View style={styles.inputInnerWrapper}>
          <CustomTextInput
            onTextChange={setEmail}
            placeholder="Email"
            type="email-address"
          />
        </View>
        <View style={styles.inputInnerWrapper}>
          <CustomTextInput
            onTextChange={setPassword}
            placeholder="Password"
            type="ascii-capable"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputInnerWrapper}>
          <FancyButton onPress={handleSignUp} text="Sign Up" />
        </View>
      </View>
      <View style={styles.navContainer}>
        <Text style={styles.normalText}>You are new ? </Text>
        <Pressable onPress={navigateToSignIn}>
          <Text style={styles.innerNormalNavTextStyle}>Create New</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  signupHeaderText: {
    fontSize: 26,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 10,
  },
  signupSubHeadingText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    marginBottom: 10,
  },
  inputInnerWrapper: {
    marginBottom: 25,
    width: '90%',
  },
  inputWrapper: {
    marginVertical: 10,
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
