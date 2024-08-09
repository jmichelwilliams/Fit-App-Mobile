/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProgramScreen from './screens/ProgramScreen';
import ProgramDetailsScreen from './screens/ProgramDetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Program" component={ProgramScreen} />
          <Stack.Screen
            name="ProgramDetails"
            component={ProgramDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
