import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { setItem } from '../services/storage.js'
import api from '../services/api.js';

export default ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [pwd, setPassword] = useState('');

    function submitLogin(){
        api.post('/auth', {
            username: username,
            password: pwd
        }).then((result) => {
            setItem("token", result.data.token);
            navigation.navigate('Home');
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../assets/img/icon.png')}
                    style={styles.img}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCorrect={false}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    autoCorrect={false}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={submitLogin}>

                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )

};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#57da74'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 22,
        borderRadius: 7,
        padding: 10
    },
    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        color: '#FFF',
        fontSize: 18
    }
})