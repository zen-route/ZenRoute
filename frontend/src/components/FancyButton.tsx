import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

interface IFancyButtonProps {
  text: string;
  onPress: () => void;
}
const FancyButton = ({onPress, text}: IFancyButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.fancyButtonWrapper}>
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  );
};

export default FancyButton;

const styles = StyleSheet.create({
  fancyButtonWrapper: {
    width: '100%',
    backgroundColor: '#FFBD12',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomWidth: 10,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderColor: 'black',
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 15,
    fontSize: 16,
  },
});
