
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import Weather from './src/Weather';
import GlobalFont from 'react-native-global-font';
import Menu from './src/Menu';
const Stack = createStackNavigator();


const App = () => {
  useEffect(() => {
    GlobalFont.applyGlobal('Roboto-Regular');  // Apply the Roboto font globally
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Weather" component={Weather} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;