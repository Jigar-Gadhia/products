import React from 'react';
import {Image, ImageStyle} from 'react-native';
import {Images} from '../utils/images';
import {scale} from 'react-native-size-matters';
import { Colors } from '../utils/colors';

interface ImageComponentProps {
  name: keyof typeof Images;
  height?: number;
  width?: number;
  color?: keyof typeof Colors
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  name = 'account',
  height = scale(22),
  width = scale(22),
  color = 'black'
}) => {
  return <Image source={Images[name]} style={{height, width, resizeMode: 'contain', tintColor: Colors[color]}} />;
};

export default ImageComponent;
