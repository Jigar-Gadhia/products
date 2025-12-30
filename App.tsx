import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { baseApi } from './src/utils/api';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { screenNames } from './src/utils/screenNames';
import BottomTabNavigation from './src/componnets/BottomTabNavigation';
import ProductScreen from './src/screens/productScreen/ProductScreen';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.bottomTab} component={BottomTabNavigation} />
        <Stack.Screen name={screenNames.product} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;