import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientSearchScreen from '../screens/PatientSearchScreen';
import CreateProgramScreen from '../screens/CreateProgramScreen';
import { RouteProp } from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import PatientMonitoringScreen from '../screens/PatientMonitoringScreen';
import { TouchableOpacity } from 'react-native';


export type StackParamList = {
  PatientSearchScreen: undefined,
  CreateProgramScreen: { id: string },
  PatientMonitoringScreen: { id: string },
}

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;

export type PatientStatusScreenProp = RouteProp<StackParamList, 'CreateProgramScreen'>;
export type PatientMonitoringScreenProp = RouteProp<StackParamList, 'PatientMonitoringScreen'>;


const Stack = createNativeStackNavigator();


export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0ab',
        }, 
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity>
            <Octicons name="bell-fill" size={22} color="#fff" />
          </TouchableOpacity>
        )
      }}
    >
      <Stack.Screen
        name={'PatientSearchScreen'}
        component={PatientSearchScreen}
        options={{title: 'Monitoramento DRC'}}
      />
      <Stack.Screen
        name={'CreateProgramScreen'}
        component={CreateProgramScreen}
        options={{title: 'Monitoramento DRC'}}
      />
      <Stack.Screen
        name={'PatientMonitoringScreen'}
        component={PatientMonitoringScreen}
        options={{title: 'Monitoramento DRC'}}
      />
    </Stack.Navigator>
  );
}