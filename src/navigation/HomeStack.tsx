import React, { useContext } from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientSearchScreen from '../screens/PatientSearchScreen';
import CreateProgramScreen from '../screens/CreateProgramScreen';
import { RouteProp } from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import PatientMonitoringScreen from '../screens/PatientMonitoringScreen';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NotificationsContext } from '../contexts/NotificationsProvider';


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
  const { notifications } = useContext(NotificationsContext);


  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0ab',
        }, 
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity style={styles.button}>
            <Octicons name="bell-fill" size={26} color="#fff" />
            <View style={styles.notificationsCountContainer}>
              <Text style={{color: '#fff'}}>
                {notifications.length}
              </Text>
            </View>
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

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationsCountContainer: {
    backgroundColor: '#f00',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center', borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});