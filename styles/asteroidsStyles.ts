import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  asteroidContainer: {
    flex: 1,
    marginHorizontal: 12,
    backgroundColor: "#0a4f5c", // slightly darker teal
    borderRadius: 10,
    marginVertical: 8,
    padding: 12,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  asteroidNum: {
    color: "#ffab00",
    fontSize: RFValue(14),
    textAlign: "center",
  },
  asteroidName: {
    color: "#ffab00",
    fontSize: RFValue(20),
    fontWeight: "bold",
    textAlign: "center",
  },
  asteroidText: {
    color: "white",
    fontSize: RFValue(16),
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    lineHeight: RFValue(18),
  },
  errorContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
  },
  errorText: {
    color: "#f05b65ff",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
  },
  emptyText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
