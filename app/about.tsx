import {StyleSheet, Text, View} from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // allows us to take up full screen?
        backgroundColor: '#000',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        color: 'white',
    }
});
