import { formatDate } from "@/helpers/dateHelpers";
import { Asteroid } from "@/types/asteroids";

function buildURL(startDate: Date, endDate: Date): string {
  const startDateStr = formatDate(startDate);
  const endDateStr = formatDate(endDate);
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
  const key = process.env.EXPO_PUBLIC_API_KEY;
  if (!startDate || !endDate) {
    throw new Error("Missing start date or end date");
  }
  if (!BASE_URL || !key) {
    throw new Error("Missing API URL or API Key");
  }
  const baseUrl = new URL(BASE_URL + "/neo/rest/v1/feed");
  baseUrl.searchParams.set("start_date", startDateStr);
  baseUrl.searchParams.set("end_date", endDateStr);
  baseUrl.searchParams.set("api_key", key);
  return baseUrl.toString();
}

function createAsteroid(a: any): Asteroid {
  const id = a.id;
  const name = a.name.replace(/[()]/g, "");
  const velocity = parseInt(
    a.close_approach_data[0].relative_velocity.miles_per_hour,
  );
  const missDistance = parseInt(a.close_approach_data[0].miss_distance.miles);
  const isHazardous = a.is_potentially_hazardous_asteroid;

  let minDiameter = a.estimated_diameter.feet.estimated_diameter_min;
  let maxDiameter = a.estimated_diameter.feet.estimated_diameter_max;
  const diameter = Math.round((minDiameter + maxDiameter) / 2);

  return {
    id,
    name,
    diameter,
    velocity,
    missDistance,
    isHazardous,
  };
}

export async function getAsteroids(
  startDate: Date,
  endDate: Date,
): Promise<Asteroid[] | null> {
  try {
    const url = buildURL(startDate, endDate);
    const apiDateProperty = formatDate(startDate);

    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch asteroids: ${errorData.error_message}`);
    }
    const data = await response.json();
    return (
      data.near_earth_objects?.[apiDateProperty]?.map(createAsteroid) || []
    );
  } catch (ex) {
    console.log("Error fetching asteroids:", ex);
    throw ex;
  }
}
