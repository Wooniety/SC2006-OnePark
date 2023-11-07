import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Splash,
  Onboarding,
  Login,
  SignUp,
  ForgotPassword,
  Menu,
  Map,
  FaultReporting,
  CarparkDetails,
  Search,
  SearchNearby,
  SearchSeasonal,
  SearchPrice,
  SearchSaved,
} from "./src/screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="FaultReporting" component={FaultReporting} />
        <Stack.Screen name="CarparkDetails" component={CarparkDetails} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="SearchNearby"
          component={SearchNearby}
          options={{ animation: "none" }}
        />
        <Stack.Screen
          name="SearchPrice"
          component={SearchPrice}
          options={{ animation: "none" }}
        />
        <Stack.Screen
          name="SearchSaved"
          component={SearchSaved}
          options={{ animation: "none" }}
        />
        <Stack.Screen
          name="SearchSeasonal"
          component={SearchSeasonal}
          options={{ animation: "none" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
