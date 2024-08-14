/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { HomeScreenNavigationProp } from '../types/RootStackParamsList';
import muscleUp from '../assets/muscleUp.png';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import Button from '../components/UI/Button';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

type RouteNames = 'Home' | 'Program' | 'ProgramDetails' | 'History';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const handleNavigate = (route: RouteNames) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandingContainer}>
        <Text style={styles.title}>Fit-App</Text>
        <View style={styles.imageContainer}>
          <Image source={muscleUp} style={styles.image} />
        </View>
        <Text style={styles.subTitle}>
          Tired of losing track of your workouts? Fear no more, Fit-Ap is here
          to help you!
        </Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => handleNavigate('Program')}>PLANNER</Button>
          <Button onPress={() => handleNavigate('Program')}>WORKOUT</Button>
          <Button onPress={() => handleNavigate('History')}>HISTORY</Button>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  brandingContainer: {
    flex: 1,
    margin: 4,
  },
  title: {
    fontSize: 90,
    color: Colors.text,
    fontFamily: Fonts.oswald700,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 24,
    color: Colors.text,
    textAlign: 'center',
    fontFamily: Fonts.oswald400,
    marginVertical: 24,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  buttonContainer: {
    marginVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
