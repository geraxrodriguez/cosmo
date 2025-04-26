import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    asteroidContainer: {
        marginBottom: 20,
    },
    asteroidNum: {
        color: '#ffab00',
        fontSize: RFValue(14),
        textAlign: 'center',
    },
    asteroidName: {
        color: '#ffab00',
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    asteroidText: {
        color: 'white',
        fontSize: RFValue(14),
        textAlign: 'center',
    },
    errorText: {
        color: 'white',
        textAlign: 'center',
    }
})

export default styles;
