import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; // Import thư viện biểu tượng (cần cài đặt trước)
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.topHeader}>
                <Text style={styles.appName}>Find Your Favorite Food</Text>
                <TouchableOpacity style={styles.notificationIcon}>
                    <Icon name="bell" size={25} color="#6B50F6" />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomHeader}>

                <View style={styles.searchContainer}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Icon name="search" size={20} color="#6B50F6" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="What do you want to order?"
                        placeholderTextColor={'#6B50F6'}
                    // Xử lý sự kiện tìm kiếm ở đây
                    />

                </View>
                <TouchableOpacity style={styles.filterIcon}>
                    <Icon name="sliders" size={20} color="#6B50F6" />
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingLeft: 50,
        paddingRight: 30,
    },
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    ,
    bottomHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    }
    ,
    filterIcon: {
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#EDE7FA',
    },
    appName: {
        width: '65%',
        fontSize: 31,
        fontWeight: 'bold',
        // fontFamily: 'BentonSans Bold',
        marginRight: 90
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#EDE7FA',

    },
    searchInput: {
        flex: 1,
        paddingVertical: 0,
        padding: 10,
    },
    searchIcon: {
        padding: 5,
    },
    notificationIcon: {
        padding: 5,
    },
});

export default Header;
