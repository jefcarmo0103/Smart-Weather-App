import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from '../components/ListItemIndication';

export default () => {
    const data = [
        {
            id: 1, 
            station: "Estação 007", 
            info: "A umidade do solo está abaixo do normal",
            status: 1
        },
        { 
            id: 2,
            station: "Estação 008", 
            info: "A acidez do solo está mais alto do que o normal",
            status: 1
        },
        { 
            id: 3,
            station: "Estação 005", 
            info: "A temperatura está muito alta",
            status: 2
        }
    ]

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Indicações</Text>

            </View>
            <View>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <ListItem
                            data={item}
                        />
                    )}
                />
                    
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})