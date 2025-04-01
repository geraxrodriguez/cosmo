import {StyleSheet, Text, View, ScrollView} from "react-native";
import {useState} from "react";
import styles from "../styles/styles"
import DatePicker from "../components/DatePicker";
import Asteroids from "../components/Asteroids";

export default function Index() {
    const [date, setDate] = useState(new Date());

    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            stickyHeaderIndices={[0]}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.dateText}>
                    {date.toDateString()}
                </Text>
                <Text style={styles.headerText}>
                    Asteroids are headed our way
                </Text>
            </View>

            <DatePicker
                date={date}
                setDate={setDate}
            />

            <Asteroids date={date}/>
        </ScrollView>
    );
}
