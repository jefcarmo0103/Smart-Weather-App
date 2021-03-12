import React from 'react';
import { ScrollView, View, Text, FlatList, Dimensions, StyleSheet } from 'react-native'
import ListItemRequests from '../ListItemRequests';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const styles_aux = StyleSheet.create({
    typeText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
})

const STATUS_CHAMADO = {
    0: <Text style={styles_aux.typeText}> Chamados Pendentes </Text>,
    1: <Text style={styles_aux.typeText}> Chamados em Andamento </Text>,
    2: <Text style={styles_aux.typeText}> Chamados Finalizados </Text>,
}

const STATUS_COR = {
    0: '#a36262',
    1: '#B8BD27',
    2: '#62a374'
}

export default ({ data, handlerOpen }) => {
    return (
        <View style={[styles.container, { backgroundColor: STATUS_COR[data.status] }]}>
            <View style={styles.titleTypeRequest}>
                {
                    STATUS_CHAMADO[data.status]
                }
            </View>
            <View>
                <FlatList
                    data={data.requests}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ListItemRequests
                            data={item}
                            handlerOpen={handlerOpen}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#91A0DB',
        borderRadius: 8,
        width: '81%',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.19,
        shadowRadius: 4.65,
        elevation: 7,
    },

    titleTypeRequest: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

})