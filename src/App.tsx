import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './contexts/AuthProvider';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default App;