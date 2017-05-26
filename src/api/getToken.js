import { AsyncStorage } from 'react-native';

const saveToken = async () => {
    try {
        return await AsyncStorage.getItem('@TOKEN');
    } catch (err) {
        return '';
    }
};

module.exports = saveToken;
