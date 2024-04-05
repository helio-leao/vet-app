import React, { useContext } from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientSearchScreen from '../screens/PatientSearchScreen';
import CreateProgramScreen from '../screens/CreateProgramScreen';
import { RouteProp, useNavigation } from '@react-navigation/native';
// import Octicons from 'react-native-vector-icons/Octicons';
import PatientMonitoringScreen from '../screens/PatientMonitoringScreen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NotificationsContext } from '../contexts/NotificationsProvider';
import NotificationsScreen from '../screens/NotificationsScreen';
import bellIcon from '../assets/icons/bell.png';


export type StackParamList = {
  PatientSearchScreen: undefined,
  CreateProgramScreen: { id: string },
  PatientMonitoringScreen: { id: string },
  NotificationsScreen: undefined,
}

export type StackNavigationProp = NativeStackNavigationProp<StackParamList>;

export type PatientStatusScreenProp = RouteProp<StackParamList, 'CreateProgramScreen'>;
export type PatientMonitoringScreenProp = RouteProp<StackParamList, 'PatientMonitoringScreen'>;


const Stack = createNativeStackNavigator();


export default function HomeStack() {
  const { notifications } = useContext(NotificationsContext);
  const navigation = useNavigation<StackNavigationProp>();


  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0ab',
        }, 
        headerRight: () => {
          const unreadNotificationsCount = notifications
            .filter(n => n.status === 'UNREAD').length;

          return(
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('NotificationsScreen')}
            >
              {/* <Octicons name="bell-fill" size={26} color="#fff" /> */}
              <Image
                source={bellIcon}
                style={{height: 26, width: 26, tintColor: '#fff'}}
              />
              {unreadNotificationsCount > 0 && (
                <View style={styles.notificationsCountContainer}>
                  <Text style={{color: '#fff'}}>
                    {unreadNotificationsCount}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name={'PatientSearchScreen'}
        component={PatientSearchScreen}
        options={{title: 'UriMonitor'}}
      />
      <Stack.Screen
        name={'CreateProgramScreen'}
        component={CreateProgramScreen}
        options={{title: 'UriMonitor'}}
      />
      <Stack.Screen
        name={'PatientMonitoringScreen'}
        component={PatientMonitoringScreen}
        options={{title: 'UriMonitor'}}
      />
      <Stack.Screen
        name={'NotificationsScreen'}
        component={NotificationsScreen}
        options={{title: 'Notificações'}}
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
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});