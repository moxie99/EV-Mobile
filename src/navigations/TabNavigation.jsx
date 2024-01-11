import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Favourites from '../screens/Favourites';
import AccountScreen from '../screens/AccountScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-search' size={size} color={color} />
          ),
        }}
        name='Search'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favourite',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-heart' size={size} color={color} />
          ),
        }}
        name='Favourites'
        component={Favourites}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-person' size={size} color={color} />
          ),
        }}
        name='Accounts'
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
