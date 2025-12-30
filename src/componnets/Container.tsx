import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../utils/colors';
import {scale} from 'react-native-size-matters';

interface ContainerProps {
  children: React.ReactNode;
  product?: boolean;
}

const Container: React.FC<ContainerProps> = ({children, product = false}) => {
  return (
    <SafeAreaView style={styles.container}>
      <React.Fragment>
        <StatusBar barStyle={product ? 'light-content' : 'dark-content'} />
        {children}
      </React.Fragment>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
});

export default Container;
