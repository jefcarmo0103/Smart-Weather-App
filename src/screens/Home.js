import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItemDevices';
import { Modalize } from 'react-native-modalize';
import ListItemDetailDevice from '../components/ListItemDetailDevice';
import api from '../services/api';


export default ({ navigation }) => {


    const [disps, setDisps] = useState([]);
    const [params, setParams] = useState([]);


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

    function getPropertiesAndValues(obj){
        
        const props = []; 
        for(var key in obj) {
            var value = obj[key];
            
            if(key == "humidity")
                props.push({
                    type: "Umidade",
                    value: `${obj[key].value}%`,
                    status: 1
                });
            
            else if(key == "temperature")
                props.push({
                    type: "Temperatura",
                    value: `${obj[key].value} C`,
                    status: 1
                });

            else if(key == "ground_humidity")
                props.push({
                    type: "Umidade do Solo",
                    value: `${obj[key].value}%`,
                    status: 1
                });

            else if(key == "luminosity")
                props.push({
                    type: "Luminosidade",
                    value: `${obj[key].value}`,
                    status: 1
                });

            else if(key == "pressure")
                props.push({
                    type: "Pressão",
                    value: `${obj[key].value} hPa`,
                    status: 1
                });

            else if(key == "rain_mm")
                props.push({
                    type: "Milímetros de Chuva",
                    value: `${obj[key].value} mm`,
                    status: 1
                });

            else if(key == "wind_speed")
                props.push({
                    type: "Velocidade do Vento",
                    value: `${obj[key].value} km/h`,
                    status: 1
                });

        }

        return props;
    }



    const modalizeRef = useRef(null);

    function onOpen() {
        modalizeRef.current?.open();

        setInterval(() => {
            api.get("/StateSensors/ngsi-ld%3Astation%3A003")
            .then((result) => {
                let r = getPropertiesAndValues(result.data);
                setParams(r);
            })
        }, 5000)

    }
    

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
                    data: params,
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