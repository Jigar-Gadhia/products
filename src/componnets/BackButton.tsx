import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../utils/colors';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPressBack}>
      <View style={styles.arrowUp} />
      <View style={[styles.arrowUp, styles.arrowDown]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {gap: scale(8)},
  arrowUp: {
    width: scale(15),
    height: scale(2),
    backgroundColor: Colors.white,
    transform: [{rotate: '-40deg'}],
  },
  arrowDown: {
    transform: [{rotate: '40deg'}],
  },
});

export default BackButton;
