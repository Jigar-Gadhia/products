import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Container from '../../componnets/Container';

const FavoriteScreen: React.FC = () => {
  return (
    <Container>
        <Text>Favorite</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoriteScreen;