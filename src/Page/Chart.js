import { ScrollView, StyleSheet, Image, View, Text } from "react-native"

export default Chart = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/Louis.png')}
                    />
                    <View style={styles.text}>
                        <Text style={styles.textName}>Louis Kelly</Text>
                        <Text style={styles.textTitleName}>Your Order Just Arrived!</Text>

                    </View>

                    <View style={styles.number}>
                        <Text style={styles.numberText}>20:00</Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/Paul.png')}
                    />
                    <View style={styles.text}>
                        <Text style={styles.textName}>Paul Koch</Text>
                        <Text style={styles.textTitleName}>Your Order Just Arrived!</Text>

                    </View>

                    <View style={styles.number}>
                        <Text style={styles.numberText}>20:00</Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/Carla.png')}
                    />
                    <View style={styles.text}>
                        <Text style={styles.textName}>Carla Klein</Text>
                        <Text style={styles.textTitleName}>Your Order Just Arrived!</Text>

                    </View>

                    <View style={styles.number}>
                        <Text style={styles.numberText}>20:00</Text>

                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: "#F3F3F3",
        gap: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        height: '100%',
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 30,
        borderRadius: 22,
        width: '100%',
        justifyContent: 'space-between'
    },

    textName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTitleName: {

    },
    img: {
        marginLeft: -10,

    },
  
    numberText: {
        fontSize: 14,
        color: "gray",
        
    }
})