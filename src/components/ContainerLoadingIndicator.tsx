import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function ContainerLoadingIndicator () {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'#0ab'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});