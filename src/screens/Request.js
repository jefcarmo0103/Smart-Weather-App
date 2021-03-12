import React, { useRef, useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CardItem';
import { Modalize } from 'react-native-modalize';
import DetailRequest from './DetailRequest';

export default ({ navigation }) => {

    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    }

    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);

    const mockRequests = [
        {
            status: 0,
            requests: [{
                id: 1,
                titulo: 'Chamado 1',
                subtitulo: 'Problema de Leitura',
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                status: 0
            },

            {
                id: 2,
                titulo: 'Chamado 2',
                subtitulo: 'Sensor Danificado',
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                status: 0
            },

            {
                id: 3,
                titulo: 'Chamado 3',
                subtitulo: 'Problema de Leitura',
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                status: 0
            }]
        },

        {
            status: 1,
            requests: [{
                id: 4,
                titulo: 'Chamado 4',
                subtitulo: 'Sensor Danificado',
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

            }]
        }
        ,
        {
            status: 2,
            requests: [{
                id: 5,
                titulo: 'Chamado 5',
                subtitulo: 'Sensor Danificado',
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                status: 2
            }]
        }
    ];

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Meus Chamados</Text>
            </View>

            <View>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={mockRequests}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={({ item }) => (
                        <CardItem
                            data={item}
                            handlerOpen={onOpen}
                        />
                    )}
                    inactiveSlideShift={0}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />

                <Pagination
                    dotsLength={mockRequests.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.92)'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>

            <Modalize
            ref={modalizeRef}
            >
                <DetailRequest/>
            </Modalize>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    headerText: {
        fontSize: 19,
        fontWeight: 'bold'
    }

})