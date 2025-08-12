import { Pressable, Text } from "react-native";
import styles from "../styles/indexStyles";
import DatePicker from "../components/DatePicker";
import Asteroids from "../components/Asteroids";
import { DateProvider } from "../contexts/DatesProvider";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";
import { SafeAreaView } from "react-native-safe-area-context";
import LanguageSelector from "@/components/Language";
import { useRef } from "react";
import { FlashListRef } from "@shopify/flash-list";
import { Asteroid } from "@/types/asteroids";

export default function Index() {
  const { t } = useTranslation();
  const asteroidsRef = useRef<FlashListRef<Asteroid>>(null);
  return (
    <I18nextProvider i18n={i18n}>
      <DateProvider>
        <SafeAreaView style={styles.rootContainer} edges={["top", "bottom"]}>
          <LanguageSelector />
          <Pressable
            style={styles.headerContainer}
            onPress={() => asteroidsRef?.current?.scrollToTop()}
          >
            <Text style={styles.headerText}>{t("asteroids.title")}</Text>
          </Pressable>
          <DatePicker />
          <Asteroids ref={asteroidsRef} />
        </SafeAreaView>
      </DateProvider>
    </I18nextProvider>
  );
}
