import { Asteroid } from "@/types/asteroids";
import { View, Text } from "react-native";
import styles from "@/styles/asteroidsStyles";
import { useTranslation } from "react-i18next";
import { CheckCircleIcon, WarningCircleIcon } from "phosphor-react-native";

export interface AstroidDetailProps {
  asteroid: Asteroid;
}
const AsteroidDetail = ({ asteroid }: AstroidDetailProps) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.asteroidContainer} key={asteroid.id}>
      <Text style={styles.asteroidNum}>{asteroid.id}</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.asteroidName}>{asteroid.name}</Text>
        {asteroid.isHazardous ? (
          <WarningCircleIcon color="red" size={36} />
        ) : (
          <CheckCircleIcon color="green" size={36} />
        )}
      </View>
      <Text style={styles.asteroidText} numberOfLines={1}>
        {t("asteroid.diameter")}:{" "}
        {asteroid.diameter.toLocaleString(i18n.language)} {t("asteroid.feet")}
      </Text>
      <Text style={styles.asteroidText} numberOfLines={1}>
        {t("asteroid.velocity")}:{" "}
        {asteroid.velocity.toLocaleString(i18n.language)} {t("asteroid.mph")}
      </Text>
      <Text style={styles.asteroidText} numberOfLines={1}>
        {t("asteroid.missDistance")}:{" "}
        {asteroid.missDistance.toLocaleString(i18n.language)}{" "}
        {t("asteroid.miles")}
      </Text>
      <Text style={styles.asteroidText} numberOfLines={1}>
        {t("asteroid.isHazardous")}?{" "}
        {asteroid.isHazardous ? t("asteroid.yes") : t("asteroid.no")}
      </Text>
    </View>
  );
};

export default AsteroidDetail;
