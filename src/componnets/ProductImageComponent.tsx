import React, {useState} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../utils/colors';

interface ProductImageComponentProps {
  uri: string;
  height?: number,
  width?: number
}

const ProductImageComponent: React.FC<ProductImageComponentProps> = ({uri, height=65, width=129}) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ImageBackground
      resizeMode="contain"
      source={{uri}}
      onLoadEnd={() => setIsLoading(false)}
      style={{
        height: scale(height),
        width: scale(width),
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={Colors.black}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductImageComponent;
