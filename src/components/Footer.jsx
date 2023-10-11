import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../Page/User';
import Payment from '../Page/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from '../Page/HomePage';
import Explore_Restaurant from '../Page/Explore_Restaurant';
import Chart from '../Page/Chart';

const Tab = createBottomTabNavigator();

const FooterTab= () => {
  return (
    <Tab.Navigator initialRouteName=''>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={'#6B50F6'} size={size} />
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
            <Icon name="person-outline" color={'#6B50F6'} size={size} />
          ),
         
        }}
      />
       <Tab.Screen
        name="Cart"
        component={Payment}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart-outline" color={'#6B50F6'} size={size} />
          ),
        
        }}
      />
      <Tab.Screen
        name="chart"
        component={Chart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble-ellipses-outline" color={'#6B50F6'} size={size} />
          ),
         
        }}
      />
      <Tab.Screen name="Explore" component={Explore_Restaurant}  />
    </Tab.Navigator>
  );
}

export default FooterTab;
