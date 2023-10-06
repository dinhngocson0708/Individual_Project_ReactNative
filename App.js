import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Explore_Restaurant from './src/Page/Explore_Restaurant';
import Menu from './src/Page/Menu';
import Header from './src/components/Header';

import { NavigationContainer } from '@react-navigation/native';
import FooterTabs from './src/components/Footer';


export default function App() {
  return (
      <NavigationContainer>
        <FooterTabs/>
      </NavigationContainer>
      
  );
}


