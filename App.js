import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

import GetStarted from './screens/GetStarted';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen'
import TimeTable from './screens/TimeTableScreen';

if (!firebase.apps.length){
  firebase.inititializeApp(firebaseConfig)
} else {
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  GetStarted : GetStarted,
  TimeTable: TimeTable
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
