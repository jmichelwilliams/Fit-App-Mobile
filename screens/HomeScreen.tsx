/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../types/rootStackParamsList';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('Program');
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Go to Program" onPress={handleNavigate} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
