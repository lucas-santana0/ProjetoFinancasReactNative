import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { TextInputMask } from 'react-native-masked-text';

export default () => {
    const [valor, setValor] = useState('');

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerConteudo}>
                <Text style={styles.text}>Bem vindo, Lucas!</Text>
                <View style={styles.spanSaldo}>
                    <Text style={styles.textSaldo}>R$ 1000,00</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Valor</Text>
                    <TextInputMask
                        style={styles.input}
                        type={'money'}
                        options={{
                            precision: 2, 
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$ ',
                        }}
                        value={valor}
                        onChangeText={text => setValor(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.botaoAdicionar}>
                    <Text style={styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9efe9'
    },
    containerConteudo: {
        flex: 1,
        justifyContent: 'center',
        padding: 55
    },
    spanSaldo: {
        fontFamily: 'Inter-Regular',
        backgroundColor: '#008000',
        borderRadius: 7,
        padding: 15,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    textSaldo: {
        fontFamily: 'Inter-Regular',
        color: '#fff'
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: '#252828'
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16
    },
    label: {
        fontFamily: 'Inter-Regular',
        marginBottom: 4,
        marginLeft: 4
    },
    input: {
        fontFamily: 'Inter-Regular',
        width: '100%',
        height: 40,
        borderWidth: 3,
        borderColor: 'rgba(37,40,40,0.7)',
        borderRadius: 7,
        paddingHorizontal: 8
    },
    botaoAdicionar: {
        backgroundColor: '#008000',
        width: '100%',
        height: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao: {
        fontFamily: 'Inter-Regular',
        textTransform: 'uppercase',
        color: '#fff',
    }
});
