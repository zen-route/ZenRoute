import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeRoutes} from './HomeRoutes';

import Home from '../screens/Home/Home';
import List from '../screens/List/List';

const TabNavigator = createBottomTabNavigator<HomeRoutes>();

const MainNavigator = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopColor: 'black',
          },
        }}>
        <TabNavigator.Screen
          name="Home"
          component={Home}
          //   todo -> add icons in here
        />
        <TabNavigator.Screen
          name="List"
          component={List}
          //   todo -> add icons in here
        />
      </TabNavigator.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
