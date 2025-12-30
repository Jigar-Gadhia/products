import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Colors } from '../utils/colors';

const DrawerIcon: React.FC = () => {
  return (
    <View style={styles.container}>
        {Array.from({length: 3}).map((_, index) => {
          return (
            <React.Fragment key={index}>
              <View
                style={styles.line}
              />
            </React.Fragment>
          );
        })}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(6)
  },
  line: {
                  backgroundColor: Colors.black,
                  width: scale(27),
                  height: scale(3),
                }
});

export default DrawerIcon;