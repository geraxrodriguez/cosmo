import {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';

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
        <View>
            <Button
                title="Change Date"
                onPress={(): void => setDate(selectedDate)}
            />
            <DateTimePicker
                mode="date"
                value={selectedDate}
                display="spinner"
                onChange={updateSelectedDate}
            />
        </View>
    );
};
