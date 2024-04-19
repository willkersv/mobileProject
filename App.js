import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Coleta from "./src/screens/Coleta";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home.js";
import Drawer from "./src/screens/Drawer.js";
import Pesquisas from "./src/screens/Pesquisas.js";
import Agradecimentos from "./src/screens/Agradecimentos";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={Drawer} />
        {/* <Stack.Screen name="Drawer" component={Drawer} /> */}
        <Stack.Screen name="Pesquisas" component={Pesquisas} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Coleta" component={Coleta} />
        <Stack.Screen name="Agradecimentos" component={Agradecimentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
