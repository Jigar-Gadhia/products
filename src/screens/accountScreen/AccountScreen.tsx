import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Container from '../../componnets/Container';

const AccountScreen: React.FC = () => {
  return (
    <Container>
        <Text>Account</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AccountScreen;