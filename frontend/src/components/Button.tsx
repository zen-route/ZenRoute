/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';

interface ISimpleButtonProps {
  text: string;
  onPress: () => void;
  theme: string;
  backgroundColorr?: string;
  icon?: JSX.Element;
}
const SimpleButton = ({
  text,
  onPress,
  theme,
  backgroundColorr,
  icon,
}: ISimpleButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.simpleButton,
        backgroundColor:
          theme === 'DARK'
            ? 'black'
            : !backgroundColorr
            ? 'white'
            : backgroundColorr,
      }}>
      <View>{icon}</View>
      <View>
        <Text
          style={{
            ...styles.textStyle,
            color:
              theme === 'DARK'
                ? 'white'
                : !backgroundColorr
                ? 'black'
                : 'white',
            marginLeft: icon ? 10 : 0,
          }}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  simpleButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
