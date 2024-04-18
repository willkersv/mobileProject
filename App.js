import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Coleta from "./src/screens/Coleta";
import Login from "./src/screens/Login";
import Agradecimentos from "./src/screens/Agradecimentos";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Coleta"
          component={Coleta}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Agradecimentos" component={Agradecimentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
