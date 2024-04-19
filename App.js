import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import NovaConta from './src/screens/NovaConta';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerStyle: {backgroundColor: '#2B1D62', height: 70}, headerTitle: 'Nova Conta', headerTintColor: '#573fba', headerTitleStyle: {color: '#FFFFFF', fontSize: 30, fontFamily: 'AveriaLibre'} }}>

        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="NovaConta" component={NovaConta} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
