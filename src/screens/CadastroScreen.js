import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const Cadastro = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Sobrenome</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textoBotao}>Cadastrar-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
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
        color: '#fff',
    },
    textoCadastro: {
        fontFamily: 'Inter-Regular',
        marginTop: 16,
        textDecorationLine: 'underline'
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 30
    }
});

export default Cadastro;
