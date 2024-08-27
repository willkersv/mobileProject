import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ScreenOrientation from "expo-screen-orientation";
import "react-native-gesture-handler";

import Coleta from "./src/screens/Coleta";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home.js";
import NovaPesquisa from './src/screens/NovaPesquisa.js';
import Drawer from "./src/screens/Drawer.js";
import AcoesPesquisas from "./src/screens/AcoesPesquisas.js";
import Agradecimentos from "./src/screens/Agradecimentos";
import NovaConta from "./src/screens/NovaConta.js";
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import Relatorio from './src/screens/Relatorio';
import RecuperarSenha from './src/screens/RecuperarSenha';

import { AuthProvider } from "./src/contexts/AuthContext.js";
import {SurveyProvider} from './src/contexts/SurveyContext';

const Stack = createStackNavigator();

const App = () => {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <AuthProvider>
      <SurveyProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" 
          screenOptions={{ headerStyle: {backgroundColor: '#2B1D62', height: 80}, 
          headerTintColor: '#573fba', 
          headerTitleStyle: {color: '#FFFFFF', fontSize: 30, fontFamily: 'AveriaLibre'} }}>

            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
            <Stack.Screen name="Carnaval" component={AcoesPesquisas} options={{ headerShown: true }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }} />
            <Stack.Screen name="Agradecimentos" component={Agradecimentos} options={{ headerShown: false }} />
            <Stack.Screen name="NovaConta" component={NovaConta} options={{ headerShown: true }} />
            <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{ headerShown: true }}/>
            <Stack.Screen name="Relatório" component={Relatorio} options={{ headerShown: true }}/>
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: true }}/>
            <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{ headerShown: true }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SurveyProvider>
    </AuthProvider>
  );
};

export default App;
