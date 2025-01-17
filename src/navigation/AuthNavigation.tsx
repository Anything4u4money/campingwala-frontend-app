import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import BookingScreen from '../screens/BookingScreen';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  PlaceDetail: undefined;
  Booking: undefined
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
