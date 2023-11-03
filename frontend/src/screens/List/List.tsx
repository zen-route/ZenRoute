import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const List = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
});
