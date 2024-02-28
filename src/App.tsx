import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MonitoringScreen from './screens/MonitoringScreen';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <MonitoringScreen />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default App;