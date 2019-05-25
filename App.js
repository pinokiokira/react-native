/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import HomePage from './src/screen/HomePage';

const RootStack = createStackNavigator({
  Home: { screen: HomePage },
  DoctorList: { screen: HomePage }
});

const App = createAppContainer(RootStack);
export default App;

