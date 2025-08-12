import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#115A68",
  },
  headerContainer: {
    paddingVertical: 10,
    marginBottom: 8,
    backgroundColor: "#083741",
  },
  dateText: {
    color: "#ffab00",
    fontSize: RFValue(25),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  headerText: {
    color: "#ffab00",
    fontSize: RFValue(10),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
