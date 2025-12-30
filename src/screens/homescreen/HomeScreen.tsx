import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '../../componnets/Container';
import {Colors} from '../../utils/colors';
import {scale} from 'react-native-size-matters';
import {baseApi} from '../../utils/api';
import DrawerIcon from '../../componnets/DrawerIcon';
import SearchBar from '../../componnets/SearchBar';

const HomeScreen: React.FC = () => {
  useEffect(() => {
    baseApi
      .get('/products')
      .then(res => {
        console.log('res: ', res.data);
      })
      .catch(e => console.log('error: ', e));
  }, []);
  return (
    <Container>
      <View style={styles.headerComponent}>
        <DrawerIcon />
        <SearchBar />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20)
  },
});

export default HomeScreen;
