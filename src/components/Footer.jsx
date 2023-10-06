import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Page/Cart';
import Payment from '../Page/Payment';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from '../Page/HomePage';

const Tab = createBottomTabNavigator();

const FooterTabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: 'Thanh toán',
          tabBarIcon: ({ color, size }) => (
            <Icon name="money-bill" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default FooterTabs;
