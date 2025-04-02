# Welcome to COSMO 👋
This is a Near-Earth Object (Asteroid) monitoring application using the NeoWs, a NASA Open API. 
This application allows the user to see asteroids for a selected day. Details of each asteroid include its name,
diameter, velocity, miss distance, and whether the asteroid is hazardous. 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started
1. Environment Setup
   2. Follow the [Expo installation guide](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=expo-go)
   3. I recommend the Expo Go option as it is easy to setup. 


2. Install dependencies
   ```bash
   npm install
   ```
   
3. Generate API Key
   1. Generate an API key from NASA by visiting the [NASA API Website](https://api.nasa.gov)
   

4. Create a .env file 
   1. in the root directory, create a .env file with the following two variables:
         1. EXPO_PUBLIC_API_URL=https://api.nasa.gov/neo/rest/v1/feed
         2. EXPO_PUBLIC_API_KEY=<YOUR_API_KEY>
         3. ***Replace <YOUR_API_KEY> with the key you received via email.

   
5. Start the app 
   ```bash
    npx expo start
   ```
   
Known Issues
- DateTimePicker text not displaying properly on iPhone 16, iPads. To view proper display, open app on iPhone SE
- background color on pressable not displaying properly
- Optional chaining should be implemented in parsing the API
- header topMargin needs optimizing for different devices
