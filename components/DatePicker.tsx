import {useState} from 'react';
import {View, Button, Pressable, Text} from 'react-native';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import styles from '../styles/datePickerStyles'

interface DatePickerProps {
    date: Date;
    setDate: (date: Date) => void;
}

export default function DatePicker(props: DatePickerProps) {
    const {date, setDate} = props;
    const [selectedDate, setSelectedDate] = useState(date);

    const updateSelectedDate = (_: DateTimePickerEvent, selectedDate?: Date): void => { // second param of DateTimePicker's onChange can be undefined
        if (selectedDate) {
            setSelectedDate(selectedDate);
        };
    };

    return (
        <View style={styles.datePickerContainer}>
            <Pressable
                style={styles.button}
                onPress={(): void => setDate(selectedDate)}
            >
                <Text style={styles.buttonText}>
                    Select Date
                </Text>
            </Pressable>
            <DateTimePicker
                mode="date"
                value={selectedDate}
                display="spinner"
                onChange={updateSelectedDate}
            />
        </View>
    );
};
