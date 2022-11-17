import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from 'native-base';


// ? ***************  IMPORTACION DE LOS COMPONENTES
import LoginScreen from "../views/LoginScreen";
import Footer from "../views/Footer";
import HomeScreen from "../views/HomeScreen";
import TodoListScreen from "../views/TodoListScreen";
import RegisterScreen from "../views/RegisterScreen";
import Platforms from "../views/Platforms";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
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
              name="TodoList"
              component={TodoListScreen}
              title="TodoList"
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              title="HomeScreen"
            />
            <Stack.Screen
              name="Platforms"
              component={Platforms}
              title="Platforms"
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              title="Register"
            />
            <Stack.Screen name="Footer" component={Footer} title="Footer" />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </PaperProvider>
  );
};

export default Routes;

// <View style={styles.container}>
// <View style={{ backgroundColor: "pink", flex: 1 }}/>
// <HomeScreen />
// <TodoListScreen />
// <LoginScreen />
// </View>
// <View style={{ backgroundColor: "blue", flex: 1 }} ></View>
// <Template />
// <Footer />
// <StatusBar style="auto" />
// </View>