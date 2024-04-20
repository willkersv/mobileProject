import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import Login from "./src/screens/Login.js";
import Home from "./src/screens/Home.js";
import Drawer from './src/screens/Drawer.js';
import Report from './src/screens/Report.js';

const Stack = createStackNavigator();

const App = () => {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Report" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;