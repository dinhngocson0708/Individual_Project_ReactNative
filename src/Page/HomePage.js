import { View, ScrollView, StyleSheet, Image, Text,TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native';
import Explore_Restaurant from './Explore_Restaurant';

const HomePage = (navigation) => {
 
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={require('../../assets/background.png')}
            >
                <Header  />
                <ScrollView>
                    <View style={styles.cover}>
                        <Image
                            style={styles.imgcover}
                            source={require('../../assets/HomeAdvertising.png')}
                        />

                    </View>
                    <View>
                        <View style={styles.text1}>
                            <Text style={styles.text2}>Near Restaurant</Text>
                            {/* <Button
                                title="View More"
                                onPress={handleViewMorePress}
                            /> */}
                            <Text style={styles.text3}>View more</Text>
                        </View>

                        <Explore_Restaurant />
                    </View>

                    <View>
                        <View style={styles.text1}>
                            <Text style={styles.textPopular}>Popular Menu</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Explore')}>
                              <Text style={styles.text3}>View more</Text>
                            </TouchableOpacity>
                           
                        </View>

                        <Menu/>
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
        // flex: 1,
    },
    cover: {
        flexDirection: 'row'
    },
    imgcover: {
        width: 400,
        marginLeft: 30,
        borderRadius: 16,
        marginTop: 20,
    },
    Button: {
        margin: 100,
        width: 100,
        height: 10
    },
    text1: {
        padding: 30,
        flexDirection: 'row',
        gap: 200,
        backgroundColor: '#FAFAFA'
    },
    text2: {
       fontSize: 15,
       fontWeight: 'bold'
    },
    text3: {
        color: '#6B50F6',
        fontSize: 12,
    },
    textPopular:{
        fontSize: 15,
        fontWeight: 'bold',

    },
})