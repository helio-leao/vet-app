import { StyleSheet, Text, View } from "react-native";

type ContainerMessageProps = {
  text: string,
}

export default function ContainerMessage ({text}: ContainerMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});