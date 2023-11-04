import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeRoutes} from './HomeRoutes';

import Home from '../screens/Home/Home';
import List from '../screens/List/List';
import MapView from '../screens/MapView/MapView';
import PlanRide from '../screens/PlanRide/PlanRide';

const TabNavigator = createBottomTabNavigator<HomeRoutes>();

const MainNavigator = () => {
  console.log('WE CAME IN HERE BRUH');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TabNavigator.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarButton: ['MapView'].includes(route.name as string)
            ? () => null
            : undefined,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderTopColor: 'black',
          },
        })}>
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
        <TabNavigator.Screen
          name="MapView"
          component={MapView}
          //   todo -> add icons in here
        />
        <TabNavigator.Screen
          name="PlanRide"
          component={PlanRide}
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
