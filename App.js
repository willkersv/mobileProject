import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"
import ModificarPesquisa from './src/screens/ModificarPesquisa';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ModificarPesquisa" 
      screenOptions={{ 
        headerStyle: {backgroundColor: '#2B1D62', height: 70},
        headerTitle: 'Modificar Pesquisa', 
        headerTintColor: '#573fba', 
        headerTitleStyle: {color: '#FFFFFF', fontSize: 30, fontFamily: 'AveriaLibre'} }}>
      
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App