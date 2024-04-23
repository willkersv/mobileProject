import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import Login from "./src/screens/Login.js";
import Home from "./src/screens/Home.js";
import Drawer from './src/screens/Drawer.js';
import ModificarPesquisa from './src/screens/ModificarPesquisa.js';
import RecuperarSenha from './src/screens/RecuperarSenha';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Login" 
      screenOptions={{ headerStyle: {backgroundColor: '#2B1D62', height: 80}, 
      headerTintColor: '#573fba', 
      headerTitleStyle: {color: '#FFFFFF', fontSize: 30, fontFamily: 'AveriaLibre'} }}>

        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{ headerShown: true }}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: true }}/>        
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;