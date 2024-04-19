import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import Login from "./src/screens/Login.js";
import Home from "./src/screens/Home.js";
import Drawer from './src/screens/Drawer.js';
import Pesquisas from './src/screens/Pesquisas.js';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Pesquisas" component={Pesquisas} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;