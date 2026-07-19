import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>NameMyPet</Text>
        <Text style={styles.subtitle}>Find the perfect name for your pet!</Text>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => router.push("/name-my-pet/step1")}
        >
          <Text style={styles.buttonText}>Start Naming →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#7F8C8D",
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: "#3498DB",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
