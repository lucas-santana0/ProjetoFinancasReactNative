import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image
                    source={require('../../assets/images/cifrao.png')}
                    style={styles.imagem}
                />
            </View>
            <View style={styles.rowContainer}>
                <View style={{ flex: 1 }} />
                <MaterialCommunityIcons name="logout" size={24} color="#fff" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#008000',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagem: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    }
})
