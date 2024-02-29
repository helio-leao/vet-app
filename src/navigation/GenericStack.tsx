import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import DRCMonitorScreen from '../screens/DRCMonitorScreen';
import PatientStatusScreen from '../screens/PatientStatusScreen';
import { RouteProp } from '@react-navigation/native';


export type StackParamList = {
  DRCMonitorScreen: undefined,
  PatientStatusScreen: { id: string },
}

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;
export type PatientStatusScreenProp = RouteProp<StackParamList, 'PatientStatusScreen'>;


const Stack = createNativeStackNavigator();


export default function GenericStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#0ab'}, headerTintColor: '#fff'}}
    >
      <Stack.Screen
        name={'DRCMonitorScreen'}
        component={DRCMonitorScreen}
        options={{title: 'Monitoramento DRC'}}
      />
      <Stack.Screen
        name={'PatientStatusScreen'}
        component={PatientStatusScreen}
        options={{title: 'Monitoramento DRC'}}
      />
    </Stack.Navigator>
  );
}