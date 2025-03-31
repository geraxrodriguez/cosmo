import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import styles from "../styles/index.styles"
import DatePicker from "../components/DatePicker";
import Asteroids from "../components/Asteroids";

export default function Index() {
    // define date, setDate using state
    const [date, setDate] = useState(new Date()); // initialize component with current date

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                See what asteroids are headed our way!
            </Text>

            {/* pass date to Asteroids*/}
            <Asteroids date={date} />

            {/* pass date & setDate to DatePicker */}
            <DatePicker
                date={date}
                setDate={setDate}
            />
        </View>
    );
}
