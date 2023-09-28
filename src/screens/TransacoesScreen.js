import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
    const data = [
        { id: '1', nome: 'Item 1', valor: '10' },
        { id: '2', nome: 'Item 2', valor: '20' },
        { id: '3', nome: 'Item 3', valor: '30' },
    ];

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerConteudo}>
                <Text style={styles.text}>Minhas transações</Text>
                <View style={styles.tabela}>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.row}>
                                <Text style={styles.cell}>{item.nome}</Text>
                                <Text style={styles.cell}>{item.valor}</Text>
                                <Text style={styles.cell}>
                                    <MaterialCommunityIcons
                                        name="pencil"
                                        size={18}
                                        color="#fff"
                                        style={styles.icon}
                                    />
                                </Text>
                                <Text style={styles.cell}>
                                    <MaterialCommunityIcons
                                        name="delete"
                                        size={18}
                                        color="#fff"
                                        style={styles.icon}
                                    />
                                </Text>
                            </View>
                        )}
                    >
                    </FlatList>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9efe9'
    },
    text: {
        fontFamily: 'Inter-Regular'
    },
    tabela: {
        marginTop: 10,
        backgroundColor: '#008000',
        borderRadius: 7
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(37,40,40,0.7)',
        paddingVertical: 8,
    },
    cell: {
        flex: 1,
        padding: 8,
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        color: '#fff'
    },
    containerConteudo: {
        flex: 1,
        justifyContent: 'center',
        padding: 55
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
        backgroundColor: '#f2f2f2',
    },
    headerText: {
        flex: 1,
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
