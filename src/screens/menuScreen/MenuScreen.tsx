import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Container from '../../componnets/Container';

const MenuScreen: React.FC = () => {
  return (
    <Container>
        <Text>Menu</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MenuScreen;