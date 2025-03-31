import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from "../styles/index.styles";
import { addDays, formatDate } from "../helpers/dateHelpers"

interface AsteroidsProps {
    date: Date // tells TypeScript tht Asteroids expects a "date" prop.
}

interface Asteroid {
    name: string;
    diameter: number;
    velocity: number;
    missDistance: number;
    isHazardous: boolean;
}

export default function Asteroids(props: AsteroidsProps) {
    const { date } = props;
    const [asteroids, setAsteroids] = useState<any[]>([]); // store asteroids data
    const [error, setError] = useState<string | null>(null);

    const getAsteroids = async (date: Date): Promise<void> => {
        const startDate: any = formatDate(date);
        const endDate: any = formatDate(addDays(date, 1));

        try {
            console.log(startDate);
            console.log(endDate);
        } catch (err) {
            setError('Failed to get asteroid data.');
        }
    };

    // Use useEffect to trigger the API call when the date prop changes
    useEffect(() => {
        getAsteroids(date);
    }, [date]); // causes re-run if date changes

    return (
        <View>
            <Text style={styles.text}>
                <Text> Asteroids for {date.toDateString()}</Text>
            </Text>
        </View>
    );
};
