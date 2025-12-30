import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {Fonts} from '../assets/fonts/fonts';
import {scale} from 'react-native-size-matters';
import { Colors } from '../utils/colors';

interface TextComponentProps {
  font?: keyof typeof Fonts;
  fontSize?: number;
  fontWeight?: '400' | '800' | '600';
  color?: keyof typeof Colors;
  lineHght?: number;
  children: React.ReactNode;
  capitalise?: boolean;
  numberOfLines?: number;
  style?: TextStyle;
}

const TextComponent: React.FC<TextComponentProps> = ({
  font = 'bilo',
  fontSize = 16,
  fontWeight = '400',
  lineHght,
  children,
  capitalise=true,
  color='black',
  numberOfLines,
  style
}) => {
  return (
    <Text
      style={[{
        fontFamily: font,
        fontSize: scale(fontSize),
        fontWeight: fontWeight,
        lineHeight: lineHght ? lineHght : undefined,
        color: Colors[color],
        textTransform: capitalise ? 'capitalize' : 'none',
      }, style]} numberOfLines={numberOfLines ? numberOfLines : undefined}>
      {children}
    </Text>
  );
};

export default TextComponent;
