import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Container from '../../componnets/Container';
import {Colors} from '../../utils/colors';
import {scale} from 'react-native-size-matters';
import ImageComponent from '../../componnets/ImageComponent';
import BackButton from '../../componnets/BackButton';
import {useRoute} from '@react-navigation/native';
import ProductImageComponent from '../../componnets/ProductImageComponent';
import TextComponent from '../../componnets/TextComponent';
import {priceFormat} from '../../utils/priceFormat';
import {Rating} from 'react-native-ratings';
import ButtonComponent from '../../componnets/ButtonComponent';

type itemType = {
    image: string;
    category: string,
    price: string;
    title: string;
    description: string;
    rating: number;
}

const ProductScreen: React.FC = () => {
  const route = useRoute();
  const {item}: any = route.params;
  const [readMore, setReadMore] = useState(false);
  const onPressReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <Container product>
      <View style={styles.productBackground} />
      <View style={styles.headerContainer}>
        <BackButton />
        <ImageComponent name="fav" color="white" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentInset={{bottom: scale(20)}}>
        <View style={styles.imageContainer}>
          <ProductImageComponent uri={item?.image} height={229} width={315} />
          <TouchableOpacity style={styles.previewImageContainer}>
            <ProductImageComponent uri={item?.image} height={60} width={60} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <TextComponent fontWeight="800" font="montserrat" fontSize={20}>
              {item?.category}
            </TextComponent>
            <TextComponent font="bilo" fontSize={20}>
              {priceFormat.format(item?.price)}
            </TextComponent>
          </View>
          <View style={styles.descriptionContainer}>
            <TextComponent style={styles.titleStyle}>
              {item?.title}
            </TextComponent>
            <View>
              <TextComponent numberOfLines={readMore ? undefined : 3}>
                {item?.description}
              </TextComponent>
              <TouchableOpacity onPress={onPressReadMore}>
                <TextComponent font="bilo">
                  Read {readMore ? 'less' : 'more'}
                </TextComponent>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <TextComponent font="montserrat" fontWeight="600" fontSize={15}>
            Rating
          </TextComponent>
          <Rating
            ratingCount={5}
            imageSize={scale(22)}
            minValue={item?.rating.rate}
          />
        </View>
      </ScrollView>
      <View>
        <ButtonComponent title='Add to Cart' />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productBackground: {
    backgroundColor: Colors.black,
    position: 'absolute',
    width: scale(500),
    alignSelf: 'center',
    height: scale(594),
    top: scale(-354),
    borderRadius: scale(250),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: scale(40),
    marginBottom: scale(15),
    paddingBottom: scale(15),
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkWhite,
  },
  previewImageContainer: {
    padding: scale(5),
    borderWidth: 2,
    borderRadius: scale(20),
    alignSelf: 'flex-start',
    marginTop: scale(20),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
  descriptionContainer: {
    gap: scale(10),
  },
  titleStyle: {
    textShadowColor: Colors.black,
    textShadowRadius: scale(2),
    marginTop: scale(5),
  },
  ratingContainer: {
    alignItems: 'flex-start',
    gap: scale(5)
  },
});

export default ProductScreen;
