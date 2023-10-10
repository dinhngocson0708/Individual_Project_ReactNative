import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import Header from '../components/Header';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native';
import Explore_Restaurant from './Explore_Restaurant';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={require('../../assets/background.png')}
            >
                <Header />
                <ScrollView>
                    <View style={styles.cover}>
                        <Image
                            style={styles.imgcover}
                            source={require('../../assets/HomeAdvertising.png')}
                        />

                    </View>
                    <View>
                        <View style={styles.text1}>
                            <Text>Near Restaurant</Text>
                            <Text>View More</Text>
                        </View>

                        <Explore_Restaurant />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )




}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,

    },
    cover: {
        flexDirection: 'row'
    },
    imgcover: {
        marginLeft: 70,
    },
    Button: {
        margin: 100,
        width: 100,
        height: 10
    },
    text1:{
        padding:30,
        flexDirection:'row',
        gap:200
    }
})