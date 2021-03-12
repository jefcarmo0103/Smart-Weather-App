import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default ({ data, handlerOpen }) => {
    

    return (

        <>
            <TouchableOpacity
                style={styles.containerItem}
                onPress={handlerOpen}
            >
                <Text style={styles.title}>{data.titulo}</Text>
                <Text style={styles.subtitle}>{data.subtitulo}</Text>
                <Text style={styles.description}>{data.descricao}</Text>
            </TouchableOpacity>
            
        </>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: 'white',
        marginTop: 10,
        padding: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.19,
        shadowRadius: 4.65,
        elevation: 3,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5
    },
    subtitle: {
        marginBottom: 5,
        fontSize: 13
    },
    description: {
        marginBottom: 10,
        fontSize: 13
    }

})