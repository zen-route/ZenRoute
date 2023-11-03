import React from 'react';
import {Pressable} from 'react-native';
import BackIcon from '../assets/svgs/BackIcon';

interface IBackButtonProps {
  onPress: () => void;
}
const BackButton = ({onPress}: IBackButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <BackIcon />
    </Pressable>
  );
};

export default BackButton;
