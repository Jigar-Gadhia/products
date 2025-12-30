import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../componnets/Container';
import {scale} from 'react-native-size-matters';
import {baseApi} from '../../utils/api';
import DrawerIcon from '../../componnets/DrawerIcon';
import SearchBar from '../../componnets/SearchBar';
import TextComponent from '../../componnets/TextComponent';
import ImageComponent from '../../componnets/ImageComponent';
import {isEmpty} from 'lodash';
import {Colors} from '../../utils/colors';
import ProductImageComponent from '../../componnets/ProductImageComponent';
import {priceFormat} from '../../utils/priceFormat';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/screenNames';

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const isData = !isEmpty(data);
  const navigation = useNavigation();
  useEffect(() => {
    setLoader(true);
    baseApi
      .get('/products')
      .then(res => {
        console.log('res: ', res.data);
        setData(res.data);
      })
      .catch(e => console.log('error: ', e))
      .finally(() => setLoader(false));
  }, []);

  const onPressProduct = (item: any) => {
    navigation.navigate(screenNames.product, {item});
  };

  return (
    <Container>
      <View style={styles.headerComponent}>
        <DrawerIcon />
        <SearchBar value={search} onChnageText={setSearch} />
      </View>
      <View style={styles.titleComponent}>
        <TextComponent font="montserrat" fontSize={30} fontWeight="800">
          Products
        </TextComponent>
        <View style={styles.filterContainer}>
          <ImageComponent name="sort" />
          <ImageComponent name="filter" />
        </View>
      </View>
      {loader ? (
        <ActivityIndicator
          size="large"
          color={Colors.black}
          style={styles.loaderStyle}
        />
      ) : (
        <React.Fragment>
          {isData && (
            <View style={{marginTop: scale(5)}}>
              <TextComponent font="bilo">
                {data.length} products found
              </TextComponent>
            </View>
          )}
          <FlatList<any>
            data={data}
            style={{marginTop: scale(20)}}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{gap: scale(15)}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressProduct(item)}
                  style={{
                    backgroundColor: Colors.white,
                    padding: scale(15),
                    width: '48%',
                    borderRadius: scale(15),
                  }}>
                  <View
                    style={{
                      alignSelf: 'flex-end',
                    }}>
                    <ImageComponent name="fav" />
                  </View>
                  <ProductImageComponent uri={item?.image} />
                  <View style={styles.productDetailsContainer}>
                    <TextComponent font="bilo">{item?.category}</TextComponent>
                    <TextComponent
                      font="bilo"
                      numberOfLines={2}
                      fontSize={13}
                      color="textGray">
                      {item?.description}
                    </TextComponent>
                    <TextComponent font="bilo" fontSize={14}>
                      {priceFormat.format(item?.price)}
                    </TextComponent>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </React.Fragment>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  loaderStyle: {
    flex: 1,
  },
  headerComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(20),
  },
  titleComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: scale(15),
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  productDetailsContainer: {
    gap: scale(5),
    marginTop: scale(10),
  },
});

export default HomeScreen;
