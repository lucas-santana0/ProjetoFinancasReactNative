import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Header from '../components/Header';

const Cadastro = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerConteudo}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sobrenome</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerConteudo: {
        flex: 1,
        justifyContent: 'center',
        padding: 55
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
    botao: {
        backgroundColor: '#008000',
        width: '100%',
        height: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    textoBotao: {
        fontFamily: 'Inter-Regular',
        textTransform: 'uppercase',
        color: '#fff',
    },
    textoCadastro: {
        marginTop: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 30
    }
});

export default Cadastro;
