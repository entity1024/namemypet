import { Linking, Platform } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function AboutScreen() {
  const bgColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subtitleColor = useThemeColor({}, "subtitle");
  const primary = useThemeColor({}, "primary");
  const border = useThemeColor({}, "border");

  const handlePrivacy = () => {
    Linking.openURL("https://namemypet.com/privacy");
  };

  const handleRate = () => {
    const url = Platform.select({
      ios: "https://apps.apple.com/app/namemypet",
      android: "https://play.google.com/store/apps/details?id=com.namemypet",
      default: "https://namemypet.com",
    });
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoEmoji}>🐾</Text>
          <Text style={[styles.appName, { color: textColor }]}>NameMyPet</Text>
          <Text style={[styles.version, { color: subtitleColor }]}>
            Version 1.0.0
          </Text>
        </View>

        <Text style={[styles.description, { color: subtitleColor }]}>
          Find the perfect name for your pet. NameMyPet helps you discover
          creative and meaningful names based on your pet's type, gender, and
          style preferences.
        </Text>

        <View style={[styles.divider, { backgroundColor: border }]} />

        <Pressable
          style={({ pressed }) => [
            styles.linkItem,
            pressed && styles.linkPressed,
          ]}
          onPress={handlePrivacy}
        >
          <Text style={[styles.linkText, { color: primary }]}>
            Privacy Policy
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.linkItem,
            pressed && styles.linkPressed,
          ]}
          onPress={handleRate}
        >
          <Text style={[styles.linkText, { color: primary }]}>
            Rate the app
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },
  logoContainer: { alignItems: "center", marginBottom: 24 },
  logoEmoji: { fontSize: 64, marginBottom: 12 },
  appName: { fontSize: 24, fontWeight: "700", marginBottom: 4 },
  version: { fontSize: 14 },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  divider: { height: 1, width: "80%", marginBottom: 24 },
  linkItem: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
    marginBottom: 8,
  },
  linkPressed: { opacity: 0.7 },
  linkText: { fontSize: 16, fontWeight: "500" },
});
