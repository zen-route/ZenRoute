import React from 'react';
import {TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';

interface ICustomTextInputProp {
  placeholder: string;
  onTextChange: any;
  type: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const CustomTextInput = ({
  placeholder,
  onTextChange,
  type,
  secureTextEntry,
}: ICustomTextInputProp) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'black'}
      onChangeText={e => onTextChange(e)}
      keyboardType={type}
      style={styles.textInputStyle}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: 'white',
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
