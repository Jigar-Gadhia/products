import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {screenNames} from '../utils/screenNames';
import HomeScreen from '../screens/homescreen/HomeScreen';
import ImageComponent from './ImageComponent';
import MenuScreen from '../screens/menuScreen/MenuScreen';
import CartScreen from '../screens/cartScreen/CartScreen';
import FavoriteScreen from '../screens/favoriteScreen/FavoriteScreen';
import AccountScreen from '../screens/accountScreen/AccountScreen';
import {Colors} from '../utils/colors';
import { scale } from 'react-native-size-matters';

const BottomTabNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
          height: scale(80)
        },
      }}>
      <Tab.Screen
        name={screenNames.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ImageComponent
              color={focused ? 'purple' : 'white'}
              name="home"
              height={22}
              width={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.menu}
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ImageComponent
              color={focused ? 'purple' : 'white'}
              name="menu"
              height={22}
              width={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.cart}
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ImageComponent
              color={focused ? 'purple' : 'white'}
              name="cart"
              height={22}
              width={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.fav}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ImageComponent
              color={focused ? 'purple' : 'white'}
              name="fav"
              height={22}
              width={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.account}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ImageComponent
              color={focused ? 'purple' : 'white'}
              name="account"
              height={22}
              width={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
