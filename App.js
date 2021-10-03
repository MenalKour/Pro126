import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraPage from './screen/CameraScreen';

export default class App extends React.Component {
  render(){
    return(
      <CameraPage/>
    );
  }
}