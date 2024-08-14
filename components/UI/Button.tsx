import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}
const Button = ({ onPress, children }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: 130,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.oswald400,
    fontSize: 18,
  },
});
