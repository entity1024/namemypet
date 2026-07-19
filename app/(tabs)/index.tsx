import { useRouter } from "expo-router";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Pressable } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function HomeScreen() {
  const router = useRouter();
  const bgColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subtitleColor = useThemeColor({}, "subtitle");
  const primary = useThemeColor({}, "primary");

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>🐾</Text>
          <Text style={[styles.title, { color: textColor }]}>NameMyPet</Text>
          <Text style={[styles.subtitle, { color: subtitleColor }]}>
            Find the perfect name for your pet
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.startButton,
              { backgroundColor: primary },
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/wizard/pet")}
          >
            <Text style={styles.buttonText}>Start Naming →</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: { fontSize: 80, marginBottom: 16 },
  title: { fontSize: 42, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 40, textAlign: "center" },
  startButton: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#3498DB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonPressed: { transform: [{ scale: 0.97 }], opacity: 0.9 },
  buttonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "600" },
});
