import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../modules/auth/modules/login";
import { RegisterScreen } from "../modules/auth/modules/register";
import { ProfileScreen } from "../modules/user/modules/profile";
import { ChatScreen } from "../modules/chat";
import { HomeScreen } from "../modules/home";
import { InitScreen } from "../modules/init";

export default function RoutesConfig() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Init"
          options={{
            headerShown: false,
          }}
          component={InitScreen}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Chat"
          options={{
            headerShown: false,
          }}
          component={ChatScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
