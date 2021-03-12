import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const ICON_TYPE = {
    umidade: 'droplet',
    temperatura: 'sun',
    vento: 'feather',
    pressão: 'thermometer'
}

export default ({ data }) => {
    return (
        <View style = {[styles.container, data.status == 1 ? styles.backgroundRun : styles.backgroundError]}>
            <View style={[styles.metric]}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={ICON_TYPE[data.type.toLowerCase()]} size={60} color={'white'} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                    <Text style={[styles.typeText, styles.textWhite, styles.shadowText]}>{data.type}</Text>
                    <Text style={[styles.valueText, styles.textWhite, styles.shadowText]}>{data.value}</Text>
                </View>
            </View>
            <View style={styles.containerTime}>
                <Icon name='watch' size={15} color={'white'}>
                    <Text>12/03/2021 01:54:12</Text>
                </Icon>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flex: 1,
        margin: 10,
        borderRadius: 8,
        padding: 10,
         shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.49,
        shadowRadius: 4.65,
        elevation: 7,
    },

    backgroundError: {
        backgroundColor: '#a36262'
    },
    backgroundRun: {
        backgroundColor: '#62a374'
    },
    metric: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textIcon: {
        fontSize: 17
    },
    typeText: { 
        fontSize: 25,         
    },
    valueText: { 
        fontSize: 30, 
        fontWeight: 'bold',
        
    },
    textWhite:{
        color: 'white'
    },
    containerTime: {
        marginTop: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    shadowText: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }


})