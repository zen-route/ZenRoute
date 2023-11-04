/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import BlueBackButton from '../assets/svgs/BlueBackButton';
import WhiteBackButton from '../assets/svgs/WhiteBackButton';

interface IHeaderProps {
  theme: string;
  onBack: () => void;
  text: string;
}
const Header = ({theme, onBack, text}: IHeaderProps) => {
  return (
    <View
      style={{
        backgroundColor: theme === 'BLUE' ? '#1947E5' : 'white',
        display: 'flex',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Pressable onPress={onBack}>
        {theme !== 'BLUE' ? <BlueBackButton /> : <WhiteBackButton />}
      </Pressable>
      <Text
        style={{
          color: theme === 'BLUE' ? 'white' : 'black',
          fontFamily: 'Montserrat-Bold',
          fontSize: 24,
          marginLeft: 60,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Header;
