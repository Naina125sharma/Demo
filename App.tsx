import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as ReduxProvider } from "react-redux";
import Welcome from "./src/screens/auth/welcome";
import store from './src/redux/store';

const Stack = createNativeStackNavigator;

const App = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <Welcome/>
      </ReduxProvider>
    </NavigationContainer>
  )
}
export default App

