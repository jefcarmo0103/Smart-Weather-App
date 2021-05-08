import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = (chave, valor) => {
    AsyncStorage.setItem(chave, valor);
}

export const getItem = async(chave) => {
    const valor = await AsyncStorage.getItem(chave);
    return valor;
}

