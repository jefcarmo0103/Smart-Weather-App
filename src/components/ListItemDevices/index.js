import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Feather';


const ICON_STATUS = {
    2: <Icon name={'alert-triangle'} size={30} color="#B8BD27" />,
    1: <Icon name={'check-circle'} size={30} color="green" />,
    0: <Icon name={'alert-circle'} size={30} color="red" />
}

export default ({data, handleRight}) => {

    function RightAction({ progress, dragX, onPress }){
        const scale = dragX.interpolate({
            inputRange:[-100, 0],
            outputRange:[1, 0],
            extrapolate: 'clamp'
          })

        return (
            <View style={{marginTop: 20, height: 100}}>
                <TouchableOpacity style={styles.rightAction} onPress={onPress}>
                    <Animated.View style={[{padding: 20},  { transform: [{ scale: scale}]} ]}>
                        <Icon name={'list'} size={40} color="#FFF" />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={(progress, dragX) => <RightAction progress={progress} dragX={dragX} onPress={handleRight}/>}
        >
            <View style={styles.container}>
                {
                    ICON_STATUS[data.status]
                }
                <Text style={styles.text}>{data.dispositivo}</Text>
                <Text></Text>
            </View>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        marginTop: 20,
        padding: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.49,
        shadowRadius: 4.65,
        elevation: 7,
    },
    text:{
        fontSize: 19,
        color: '#222',
        marginLeft: 10
    },
    rightAction:{
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    actionText:{
        fontSize: 17,
        color: '#FFF',
        padding: 20,
    }
})
