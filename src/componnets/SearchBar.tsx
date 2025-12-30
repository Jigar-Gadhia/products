import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../utils/colors';
import ImageComponent from './ImageComponent';
import {Fonts} from '../assets/fonts/fonts';

interface SearchBarProps {
    value: string,
    onChnageText: (text: string) => void,
}

const SearchBar: React.FC<SearchBarProps> = ({onChnageText, value=''}) => {
  return (
    <View style={styles.container}>
      <ImageComponent name="search" color="darkGrey" />
      <TextInput
        placeholderTextColor={Colors.darkGrey}
        placeholder="Search product"
        style={styles.inputStyle}
        value={value}
        onChangeText={onChnageText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 1,
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    paddingLeft: scale(15),
    gap: scale(10),
    backgroundColor: Colors.white,
    borderRadius: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: scale(16),
    fontFamily: Fonts.bilo,
    color: Colors.black,
    flex: 1
  },
});

export default SearchBar;
