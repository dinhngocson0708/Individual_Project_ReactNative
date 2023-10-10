import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Page/User';
import Payment from '../Page/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from '../Page/HomePage';

const Tab = createBottomTabNavigator();

const FooterTabs = () => {
  return (
    <Tab.Navigator initialRouteName=''>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
         
        }}
      />
       <Tab.Screen
        name="Cart"
        component={Payment}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-outline" color={color} size={size} />
          ),
        
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Payment}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
         
        }}
      />
    </Tab.Navigator>
  );
}

export default FooterTabs;
