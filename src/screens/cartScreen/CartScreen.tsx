import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Container from '../../componnets/Container';

const CartScreen: React.FC = () => {
  return (
    <Container>
        <Text>Cart</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CartScreen;