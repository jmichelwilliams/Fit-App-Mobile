/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Oswald_400Regular,
  Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './screens/HomeScreen';
import ProgramScreen from './screens/ProgramScreen';
import ProgramDetailsScreen from './screens/ProgramDetailsScreen';
import { RootStackParamList } from './types/RootStackParamsList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#14213d' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#14213d' },
          }}
        >
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: '' }}
          />
          <RootStack.Screen name="Program" component={ProgramScreen} />
          <RootStack.Screen
            name="ProgramDetails"
            component={ProgramDetailsScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
