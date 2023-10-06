import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Explore_Restaurant from './src/Page/Explore_Restaurant';
import Menu from './src/Page/Menu';


export default function App() {
  return (
    <View style={styles.container}>
      <Explore_Restaurant/>
      <Menu/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
