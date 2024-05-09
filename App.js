
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './components/pages/LandingPage';
import ProfilePage from './components/pages/ProfilePage';
import ConversionPage from './components/pages/ConversionPage';
import TrendsPage from './components/pages/TrendsPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Currency Conversion" component={ConversionPage} />
        <Stack.Screen name="Trends" component={TrendsPage} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}


export default App;
