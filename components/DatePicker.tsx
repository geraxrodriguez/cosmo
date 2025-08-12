import { View, Pressable, Text } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import styles from "../styles/datePickerStyles";
import { useDateContext } from "@/contexts/DatesProvider";
import { Dispatch, SetStateAction, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export type DatePickerProps = {
  title?: string;
};

export default function DatePicker({ title }: DatePickerProps) {
  const { startDate, endDate, setStartDate, setEndDate } = useDateContext();
  const { t } = useTranslation();
  const [startDateLocal, setStartDateLocal] = useState(startDate);
  const [endDateLocal, setEndDateLocal] = useState(endDate);

  const handlePressApply = () => {
    console.log("startDate: ", startDateLocal);
    console.log("endDate: ", endDateLocal);
    setStartDate(startDateLocal);
    setEndDate(endDateLocal);
  };

  return (
    <View style={styles.datePickerContainer}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          paddingBottom: 8,
        }}
      >
        {title || t("datePicker.title")}
      </Text>
      <View style={{ flexDirection: "row", marginVertical: 4 }}>
        <Text style={styles.pressableText}>{t("datePicker.startDate")}</Text>
        <DateTimePicker
          mode="date"
          value={startDateLocal}
          onChange={(evt) => {
            setStartDateLocal(new Date(evt.nativeEvent.timestamp));
          }}
          display="compact"
          themeVariant="dark"
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 4 }}>
        <Text style={styles.pressableText}>{t("datePicker.endDate")}</Text>
        <DateTimePicker
          mode="date"
          value={endDateLocal}
          onChange={(evt) => {
            setEndDateLocal(new Date(evt.nativeEvent.timestamp));
          }}
          display="compact"
          themeVariant="dark"
        />
      </View>
      <Pressable
        style={({ pressed }) => ({
          ...styles.pressable,
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={handlePressApply}
      >
        <Text style={styles.pressableText}>{t("datePicker.apply")}</Text>
      </Pressable>
    </View>
  );
}
