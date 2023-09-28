import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/cifrao.png')}
                style={styles.imagem}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Usuario</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
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
            <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('Opcoes')}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textoCadastro}>Cadastre-se</Text>
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
    botaoLogin: {
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
    },
    textoCadastro: {
        marginTop: 16,
        fontFamily: 'Inter-Regular',
        textDecorationLine: 'underline'
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 30
    }
});

export default Login;
