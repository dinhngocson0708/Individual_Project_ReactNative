import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Explore_Restaurant from './src/Page/Explore_Restaurant';
import Menu from './src/Page/Menu';
import Header from './src/components/Header';
import Chart from './src/Page/Chart';

import { NavigationContainer } from '@react-navigation/native';
import FooterTab from './src/components/Footer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FooterTab/>
    </NavigationContainer>
  );
}


