import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Colors } from '../utils/colors';
import TextComponent from './TextComponent';

interface ButtonComponentProps {
    title: string;
    onPress?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TextComponent font='bilo' color='white'>{title}</TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: scale(12),
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: scale(10)
  },
});

export default ButtonComponent;