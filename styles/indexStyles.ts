import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#115A68', 
    },
    headerContainer: {
        paddingTop: RFValue(50),
        paddingBottom: 20,
        backgroundColor: '#083741',
        marginBottom: 30,
    },
    dateText: {
        color: '#ffab00',
        fontSize: RFValue(25),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    headerText: {
        color: '#ffab00',
        fontSize: RFValue(10),
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default styles;
