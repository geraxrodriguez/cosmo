# Welcome to Cosmo 💫☄️🛸
This is a mobile application that monitors Near-Earth Objects (asteroids) using **NeoWs, a NASA Open API**. 
This application allows the user to see asteroids for a selected day. Details of each asteroid include its name,
diameter, velocity, miss distance, and whether the asteroid is hazardous. 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

---
1. Run `npm install` to install dependencies.


2. Follow the [Expo Installation Guide](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=expo-go)
   - I recommend the Expo Go option as it is easy to set up. 

 
3. Generate an API key from NASA by visiting the [NASA API Website](https://api.nasa.gov). 


4. In the project's ROOT directory, create a `.env` file with the following two variables:
   1. EXPO_PUBLIC_API_URL=https://api.nasa.gov/neo/rest/v1/feed
   2. EXPO_PUBLIC_API_KEY=<YOUR_API_KEY>
      - ***Replace <YOUR_API_KEY> with the key you received via email.
  ```
example .env file

EXPO_PUBLIC_API_URL=https://api.nasa.gov/neo/rest/v1/feed
EXPO_PUBLIC_API_KEY=103948dasde712ajhf34
  ```

   
5. Start the app by running `npx expo start`. 
   
---
Known Issues:
- Optional chaining should be implemented in parsing the API
- want to implement a loading state meanwhile API request is being fulfilled
- ~~DateTimePicker text not displaying properly on iPhone 16, iPads. To view proper display, open app on iPhone SE~~ (fixed)
- ~~UPDATE: DateTimePicker only renders correctly when device set to dark mode.~~ (fixed)
- ~~background color on pressable not displaying properly~~ (fixed)
- ~~header topMargin needs optimizing for different devices~~ (fixed)
