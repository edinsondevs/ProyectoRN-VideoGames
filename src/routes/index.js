import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from 'native-base';


// ? ***************  IMPORTACION DE LOS COMPONENTES
import LoginScreen from "../views/LoginScreen";
import Footer from "../views/Footer";
import HomeScreen from "../views/HomeScreen";
import Search from "../views/Search/index.js";
import Details from "../views/Details";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              title="LoginScreen"
            />
             <Stack.Screen
              name="Details"
              component={Details}
              title="Details"
            /> 
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              title="HomeScreen"
            />
            <Stack.Screen
              name="Search"
              component={Search}
              title="Search"
            />
            <Stack.Screen name="Footer" component={Footer} title="Footer" />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </PaperProvider>
  );
};

export default Routes;