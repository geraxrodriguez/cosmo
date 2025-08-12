import React, { useState } from "react";
import { TranslateIcon } from "phosphor-react-native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useTranslation } from "react-i18next";
import { languageCodes } from "@/i18n";

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selector}
      >
        <TranslateIcon color="#fff" />
        <Text style={styles.langText}>
          {languageCodes.find((lang) => lang === i18n.language) ||
            i18n.language}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContent}>
          <FlatList
            data={languageCodes}
            keyExtractor={(item) => item}
            ListHeaderComponent={
              <Text style={styles.headerText}>{t("language.select")}</Text>
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => changeLanguage(item)}
                style={[
                  styles.langItem,
                  item === i18n.language && styles.selectedLangItem,
                ]}
              >
                <Text
                  style={[
                    styles.langItemText,
                    item === i18n.language && styles.selectedLangItemText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "auto",
    width: 120,
  },
  selector: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0a4f5c",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  langText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "#00000099",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffab00",
    textAlign: "center",
    marginBottom: 12,
  },
  modalContent: {
    position: "absolute",
    top: "30%",
    left: "10%",
    right: "10%",
    backgroundColor: "#083741",
    borderRadius: 8,
    maxHeight: 250,
    paddingVertical: 8,
  },
  langItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  langItemText: {
    fontSize: 24,
    color: "#ffab00",
    textAlign: "center",
  },
  selectedLangItem: {
    backgroundColor: "#ffab0022",
  },
  selectedLangItemText: {
    color: "#ffab00",
    fontWeight: "bold",
  },
});
