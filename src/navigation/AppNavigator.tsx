import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeStack from './HomeStack';
import { AuthContext } from '../contexts/AuthProvider';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();


export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  if(!user) return <LoginScreen />

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ddd',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#0ab',
          borderTopWidth: 0,
        },
      }}
      initialRouteName='HomeTab'
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (            
            <Ionicons name={"home"} size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='AddTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="plus" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='CheckTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome6 name="list-check" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='ProfileTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-md" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};