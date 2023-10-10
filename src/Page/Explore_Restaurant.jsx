import React from "react";
import { View, StyleSheet, Text, Image,ScrollView } from "react-native"

export default ExploreRestaurant = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          
        <View style={styles.container}>

            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={require('../../assets/vegan.png')}
                />
                <Text style={styles.textName}>Vegan Resto</Text>
                <Text style={styles.number}>12 mins</Text>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={require('../../assets/healthyfood.png')}
                />
                <Text style={styles.textName}>Healthy food</Text>
                <Text style={styles.number}>12 mins</Text>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={require('../../assets/goodfood.png')}
                />
                <Text style={styles.textName}>Vegan Resto</Text>
                <Text style={styles.number}>12 mins</Text>
            </View>

            <View style={styles.card}>
                <Image
                    style={[styles.img,{width:50,height:50}]}
                    source={require('../../assets/healthy.jpg')}
                />
                <Text style={styles.textName}>Vegan Resto</Text>
                <Text style={styles.number}>12 mins</Text>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={require('../../assets/vegan.png')}
                />
                <Text style={styles.textName}>Vegan Resto</Text>
                <Text style={styles.number}>12 mins</Text>
            </View>
             
        </View>  
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 30,
        backgroundColor: "#FAFAFA",
        gap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },
    card: {
        backgroundColor: "white",
        width: "48%",
        padding: 30,
        borderRadius:30,
        alignItems:'center',  
    },
    textName:{
        fontSize: 20,
        
    }
});