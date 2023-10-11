import { ScrollView, StyleSheet, Image, View, Text } from "react-native"

export default Menu = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/Herbal.png')}
                    />
                    <View style={styles.text}>
                        <Text style={styles.textName}>Herbal Pancake</Text>
                        <Text style={styles.textTitleName}>Warung Herbal</Text>

                    </View>

                    <View style={styles.number}>
                        <Text style={styles.numberText}>$7</Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/menu.png')}
                    />
                    <View style={styles.text}>
                        <Text style={styles.textName}>Fruit Salad</Text>
                        <Text style={styles.textTitleName}>Wijie Resto</Text>

                    </View>

                    <View style={styles.number}>
                        <Text style={styles.numberText}>$5</Text>

                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        style={[styles.img]}
                        source={require('../../assets/menu.png')}
                    />
                    <View style={styles.text}>
                        <Text style={styles.textName}>Green Noodle</Text>
                        <Text style={styles.textTitleName}>Noodle Home</Text>

                    </View>

                    <View style={styles.number}>
                        <Text style={styles.numberText}>$15</Text>

                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#FAFAFA",
        gap: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        height: '100%',
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 22,
        width: '100%',
        justifyContent: 'space-between'
    },

    textName: {
        fontSize: 20,
    },
    textTitleName: {

    },
  
    numberText: {
        fontSize: 26,
        color: "#6B50F6",
        fontWeight: "bold",
        
    }
})