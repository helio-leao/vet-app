import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeStack from './HomeStack';
import { AuthContext } from '../contexts/AuthProvider';
import LoginScreen from '../screens/LoginScreen';
import { Image } from 'react-native';
import homeIcon from '../assets/icons/home.png';
import plusIcon from '../assets/icons/plus.png';
import checklistIcon from '../assets/icons/checklist.png';
import userIcon from '../assets/icons/user.png';

const Tab = createBottomTabNavigator();


export default function AppNavigator() {
  const { accessToken } = useContext(AuthContext);

  if(!accessToken) return <LoginScreen />

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
            <Image
              source={homeIcon}
              style={{height: size, width: size, tintColor: color}}
            />
            // <Ionicons name={"home"} size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='AddTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={plusIcon}
              style={{height: size, width: size, tintColor: color}}
            />
            // <FontAwesome name="plus" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='CheckTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={checklistIcon}
              style={{height: size, width: size, tintColor: color}}
            />
            // <FontAwesome6 name="list-check" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='ProfileTab'
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={userIcon}
              style={{height: size, width: size, tintColor: color}}
            />
            // <FontAwesome5 name="user-md" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};