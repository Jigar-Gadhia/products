import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Images} from '../utils/images';
import {scale} from 'react-native-size-matters';
import {Colors} from '../utils/colors';

interface ImageComponentProps {
  name?: keyof typeof Images;
  uri?: string;
  url?: boolean;
  height?: number;
  width?: number;
  color?: keyof typeof Colors;
  onPress?: () => void;
  disabled?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  name = 'account',
  height = scale(22),
  width = scale(22),
  url = false,
  uri,
  color = 'black',
  onPress,
  disabled = false
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image
        source={url ? {uri} : Images[name]}
        style={{height, width, resizeMode: 'contain', tintColor: Colors[color]}}
      />
    </TouchableOpacity>
  );
};

export default ImageComponent;
