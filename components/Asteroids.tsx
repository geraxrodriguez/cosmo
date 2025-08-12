import {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { View, Text, ActivityIndicator, RefreshControl } from "react-native";
import styles from "../styles/asteroidsStyles";
import { useDateContext } from "@/contexts/DatesProvider";
import { Asteroid } from "@/types/asteroids";
import { getAsteroids } from "@/operations/asteroids";
import { FlashList, FlashListRef } from "@shopify/flash-list";
import AsteroidDetail from "./AsteroidDetails";

const Asteroids = forwardRef((props, ref) => {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const flashListRef = useRef<FlashListRef<Asteroid>>(null);
  const { startDate, endDate } = useDateContext();

  async function updateAsteroids() {
    setLoading(true);
    try {
      setError("");
      const asteroids = await getAsteroids(startDate, endDate);
      if (asteroids) {
        setAsteroids(asteroids);
      }
    } catch (err) {
      setAsteroids([]);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    updateAsteroids();
  }, [startDate, endDate]);

  // Expose scrollToTop method to parent via ref
  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      if (flashListRef.current) {
        flashListRef.current.scrollToOffset({ offset: 0, animated: true });
      }
    },
  }));

  if (loading)
    return (
      <ActivityIndicator color="white" size="large" style={{ marginTop: 12 }} />
    );
  if (error)
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  return (
    <FlashList
      ref={flashListRef}
      data={asteroids}
      renderItem={({ item }) => <AsteroidDetail asteroid={item} />}
      keyExtractor={(item) => `${item.id}`}
      onRefresh={updateAsteroids}
      refreshing={loading}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={updateAsteroids}
          tintColor={"white"}
        />
      }
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No asteroids found :(</Text>
        </View>
      }
    >
      {error && <Text style={styles.errorText}>{error}</Text>}
    </FlashList>
  );
});

export default Asteroids;
