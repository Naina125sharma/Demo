import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash1 from "../screens/auth/splash1";
import Splash2 from "../screens/auth/splash2";
import Splash3 from "../screens/auth/splash3";
import SignIn from "../screens/auth/signIn";
import SignUp from "../screens/auth/signUp";
import ForgotPassword from "../screens/auth/forgotPassword";

export type StackAuth = {
    Splash1: undefined,
    Splash2: undefined,
    Splash3: undefined,
    SignIn:undefined,
    SignUp:undefined,
    ForgotPassword:undefined
}

const Stack = createNativeStackNavigator<StackAuth>();
const AuthNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                gestureEnabled: false,
                headerShown:false}}>
                <Stack.Screen name="Splash1" component={Splash1}/>
                <Stack.Screen name="Splash2" component={Splash2}/>
                <Stack.Screen name="Splash3" component={Splash3}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;