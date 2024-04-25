import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, StyleSheet } from "react-native";
import CustomDrawer from "../components/CustomDrawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";

import Home from "./Home";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {

  const [fontsLoaded] = useFonts({
    AveriaLibre: require("../../assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#2B1D62", width: "40%" },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerNavigator.Screen
        name="Home"
        component={Home}
        options={{
          drawerItemStyle: { height: 0 },
          headerStyle: {
            backgroundColor: "#2B1D62",
          },
          title:null,
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#2B1F5C",
          drawerLabel: () => null
        }}
      />
      <DrawerNavigator.Screen
        name="Pesquisas"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#2B1D62",
          },
          headerTitleStyle: {
            color: "#FFFFFF",
            fontSize: 30,
            fontFamily: "AveriaLibre",
          },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#2B1F5C",
          drawerInactiveBackgroundColor: "#2B1F5C",
          drawerLabel: () => <Text style={styles.label}>Pesquisas</Text>,
          drawerIcon: () => (
            <Icon
              style={styles.icon}
              name="description"
              size={32}
              color="#FFFFFF"
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  label: {
    fontFamily: "AveriaLibre",
    fontSize: 24,
    color: "white",
  },
  nav: {
    backgroundColor: "#2B1D62",
  },
  icon: {
    marginLeft: 24,
    marginRight: -24,
  },
});
