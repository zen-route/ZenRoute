import React from 'react';
import {Pressable} from 'react-native';
import SkipButton from '../assets/svgs/SkipButton';

interface IOnboardNextButtonProps {
  onPress: () => void;
}
const OnboardNextButton = ({onPress}: IOnboardNextButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <SkipButton />
    </Pressable>
  );
};

export default OnboardNextButton;
