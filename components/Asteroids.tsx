import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
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
    return `${api}?start_date=${startDate}&end_date=${endDate}&api_key=${key}`
}

async function getAsteroids(date: Date): Promise<Asteroid[]> {
    const apiDateProperty = formatDate(date);
    const url = buildURL(date);
    const response = await fetch(url);
    const data = await response.json();
    return data.near_earth_objects[apiDateProperty].map(createAsteroid);
}

function createAsteroid(a: any): Asteroid {
    let minDiameter = a.estimated_diameter.feet.estimated_diameter_min
    let maxDiameter = a.estimated_diameter.feet.estimated_diameter_max
    const diameter = (minDiameter + maxDiameter) / 2

    return {
        name: a.name,
        diameter: Math.round(diameter),
        velocity: parseInt(a.close_approach_data[0].relative_velocity.miles_per_hour),
        missDistance: parseInt(a.close_approach_data[0].miss_distance.miles),
        isHazardous: a.is_potentially_hazardous_asteroid
    };
};

export default function Asteroids(props: AsteroidsProps) {
    const {date} = props;
    const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
    const [error, setError] = useState('');

    async function updateAsteroids() {
        try {
            // commented out to avoid hitting API during styling, using mockAsteroids data
            // const asteroids = await getAsteroids(date);
            // setAsteroids(asteroids);

            // delete/comment out when you need to hit API
            setAsteroids(mockAsteroids);
        } catch (err) {
            setError('Failed to update asteroids');
        }
    };

    useEffect(() => {
        updateAsteroids();
    }, [date]);

    return (
        <View style={styles.asteroidsContainer}>
            {/* this could be in its own component: AsteroidDetails */}
            {asteroids.map((asteroid, index) => (
                <View key={index}>
                    <Text style={styles.asteroidsNum}>{index + 1}</Text>
                    <Text style={styles.asteroidsName}>{asteroid.name}</Text>
                    <Text style={styles.asteroidsText}>Diameter: {asteroid.diameter} feet</Text>
                    <Text style={styles.asteroidsText}>Velocity: {asteroid.velocity} mph</Text>
                    <Text style={styles.asteroidsText}>Miss Distance: {asteroid.missDistance} miles</Text>
                    <Text style={styles.asteroidsText}>Is Hazardous? {asteroid.isHazardous ? 'Yes': 'No'}</Text>
                    <Text></Text>
                </View>
            ))}

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};
