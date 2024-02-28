import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DRCMonitorScreen from '../screens/DRCMonitorScreen';

const Stack = createNativeStackNavigator();


export default function GenericStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerStyle: {backgroundColor: '#0ab'}, headerTintColor: '#fff'}}
    >
      <Stack.Screen
        name={'MonitoringScreen'}
        component={DRCMonitorScreen}
        options={{title: 'Monitoramento DRC'}}
      />
    </Stack.Navigator>
  );
}