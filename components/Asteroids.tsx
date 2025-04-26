import {useState, useEffect} from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {addDays, formatDate} from "../helpers/dateHelpers"
import styles from "../styles/asteroidsStyles";
import mockAsteroids from '../mocks/mockAsteroids.json'

interface AsteroidsProps {
    date: Date
}

interface Asteroid {
    name: string;
    diameter: number;
    velocity: number;
    missDistance: number;
    isHazardous: boolean;
}

function buildURL(date: Date): string {
    const startDate: any = formatDate(date);
    const endDate: any = formatDate(addDays(date, 1));
    const api = process.env.EXPO_PUBLIC_API_URL;
    const key = process.env.EXPO_PUBLIC_API_KEY;
    return `${api}start_date=${startDate}&end_date=${endDate}&api_key=${key}`
}

async function getAsteroids(date: Date): Promise<Asteroid[]> {
    const apiDateProperty = formatDate(date); // last property that holds asteroid info in API response will be in MMMM-MM-YY format
    const url = buildURL(date);

    const response = await fetch(url);
    const data = await response.json();
    return data.near_earth_objects[apiDateProperty].map(createAsteroid);
}

function createAsteroid(a: any): Asteroid {
    const name = (a.name).replace(/[()]/g, '')
    const velocity = parseInt(a.close_approach_data[0].relative_velocity.miles_per_hour)
    const missDistance = parseInt(a.close_approach_data[0].miss_distance.miles)
    const isHazardous = a.is_potentially_hazardous_asteroid;

    let minDiameter = a.estimated_diameter.feet.estimated_diameter_min
    let maxDiameter = a.estimated_diameter.feet.estimated_diameter_max
    const diameter = Math.round((minDiameter + maxDiameter) / 2)

    return {
        name,
        diameter,
        velocity,
        missDistance,
        isHazardous,
    };
};

export default function Asteroids(props: AsteroidsProps) {
    const {date} = props;
    const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
    const [error, setError] = useState('');

    async function updateAsteroids() {
        try {
            // during styling, we can comment these two lines out and use mockAsteroids instead
            const asteroids = await getAsteroids(date);
            setAsteroids(asteroids);

            // used when we want to avoid hitting API
            // setAsteroids(mockAsteroids);
        } catch (err) {
            setError('Failed to update asteroids');
        }
    };

    useEffect(() => {
        updateAsteroids();
    }, [date]);

    return (
        <View>
            {/* this could be in its own component: AsteroidDetails */}
            {asteroids.map((asteroid, index) => (
                <View
                    style={styles.asteroidContainer}
                    key={index}
                >
                    <Text style={styles.asteroidNum}>{index + 1}</Text>
                    <Text style={styles.asteroidName}>{asteroid.name}</Text>
                    <Text style={styles.asteroidText}>Diameter: {asteroid.diameter} feet</Text>
                    <Text style={styles.asteroidText}>Velocity: {asteroid.velocity} mph</Text>
                    <Text style={styles.asteroidText}>Miss Distance: {asteroid.missDistance} miles</Text>
                    <Text style={styles.asteroidText}>Is Hazardous? {asteroid.isHazardous ? 'Yes': 'No'}</Text>
                </View>
            ))}

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};
