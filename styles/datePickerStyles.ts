import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    datePickerContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    pressable: {
        paddingVertical: RFValue(7),
        paddingHorizontal: RFValue(15),
        backgroundColor: '#083741',
        borderRadius: 10,
    },
    pressableText: {
        color: '#ffab00',
        fontSize: RFValue(18),
        fontWeight: 'bold',
    },
})

export default styles;

