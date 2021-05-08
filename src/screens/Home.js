import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItemDevices';
import { Modalize } from 'react-native-modalize';
import ListItemDetailDevice from '../components/ListItemDetailDevice';
import api from '../services/api';


export default ({ navigation }) => {


    const [disps, setDisps] = useState([]);


    function getNameStation(name) {
        const arrNameSplit = name.split(':');
        return `${arrNameSplit[2]}-${arrNameSplit[3]}`
    }

    useEffect(() => {
        api.get("/StateSensors")
            .then((result) => {
                let r = result.data.map((device) => {
                    return { id: device.id, dispositivo: getNameStation(device.id), status: 1 }
                });

                setDisps(r);
            })
    })

    const _renderItem = ({ item }) => (
        <ListItemDetailDevice
            data={item}
        />
    )

    const data = [
        { type: 'Umidade', value: '10%', status: 1 },
        { type: 'Temperatura', value: '23 C', status: 1 },
        { type: 'Vento', value: '7 km/h', status: 0 },
        { type: 'Pressão', value: '1017 mbar', status: 1 },
    ]

    const modalizeRef = useRef(null);

    function onOpen() {
        modalizeRef.current?.open();
    }

    const mockDisp = [
        { id: 1, dispositivo: 'Dispositivo 1', status: 1 },
        { id: 2, dispositivo: 'Dispositivo 2', status: 1 },
        { id: 3, dispositivo: 'Dispositivo 3', status: 0 },
        { id: 4, dispositivo: 'Dispositivo 4', status: 1 },
        { id: 5, dispositivo: 'Dispositivo 5', status: 2 },

    ];

    return (
        <>
            <View style={styles.containerTitle}>
                <Text style={styles.titleText}>Meus Devices</Text>
            </View>

            <View>
                <FlatList
                    data={disps}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <ListItem
                            data={item}
                            handleRight={() => onOpen()}
                        />
                    )}
                />
            </View>

            <Modalize
                ref={modalizeRef}
                snapPoint={500}
                flatListProps={{
                    data: data,
                    renderItem: _renderItem,
                    keyExtractor: item => item.type
                }}
            />

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    titleText: {
        fontSize: 20
    }
})