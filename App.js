import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"

const Stack = createStackNavigator()

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App