import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  datePickerContainer: {
    flex: 0,
    alignItems: "center",
    backgroundColor: "#0a4f5c",
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  pressable: {
    marginTop: 8,
    paddingVertical: RFValue(7),
    paddingHorizontal: RFValue(15),
    backgroundColor: "#083741",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  pressableText: {
    color: "#ffab00",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
});

export default styles;
