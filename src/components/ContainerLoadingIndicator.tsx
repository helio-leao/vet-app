import { ActivityIndicator, StyleSheet, View } from "react-native";

type ContainerLoadingIndicatorProps = {
  size?: number | "large" | "small",
}

export default function ContainerLoadingIndicator ({
  size = 'large',
}: ContainerLoadingIndicatorProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={'#0ab'} />
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