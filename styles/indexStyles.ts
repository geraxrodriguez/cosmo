import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'black',
        flex: 1,
    },
    headerContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#050609', // dark gray
        marginBottom: 30,
    },
    dateText: {
        color: '#ffab00',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    headerText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',

    },
    text: {
        color: 'white',
    },
});

export default styles;
