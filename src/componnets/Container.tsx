import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../utils/colors';
import { scale } from 'react-native-size-matters';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15)
  },
});

export default Container;