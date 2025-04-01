import {StyleSheet, Text, View, ScrollView} from "react-native";
import {useState} from "react";
import styles from "../styles/indexStyles"
import DatePicker from "../components/DatePicker";
import Asteroids from "../components/Asteroids";

export default function Index() {
    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.rootContainer}>
            <ScrollView stickyHeaderIndices={[0]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.dateText}>
                        {date.toDateString()}
                    </Text>
                    <Text style={styles.headerText}>
                        asteroids that are headed our way
                    </Text>
                </View>

                <DatePicker
                    date={date}
                    setDate={setDate}
                />

                <Asteroids date={date}/>
            </ScrollView>
        </View>
    );
}
