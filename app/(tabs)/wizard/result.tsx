import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ScrollView, StatusBar, StyleSheet, Text, Pressable, Share, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/use-theme-color";
import FloatingBackButton from "@/components/FloatingBackButton";
import Header from "@/components/Header";
import { useNameGenerator } from "@/hooks/useNameGenerator";
import { addFavorite } from "@/services/favorites";
import type { PetType, Gender, StyleType } from "@/types";

const PET_EMOJI: Record<string, string> = {
  Dog: "🐕", Cat: "🐈", Rabbit: "🐇", Bird: "🐦",
  Hamster: "🐹", Turtle: "🐢", Fish: "🐟", Horse: "🐴", Pig: "🐷",
};

export default function ResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const petType = params.petType as PetType;
  const gender = params.gender as Gender;
  const style = params.style as StyleType;
  const { currentName, generate, regenerate } = useNameGenerator();
  const [saved, setSaved] = useState(false);
  const bgColor = useThemeColor({}, "background");
  const primary = useThemeColor({}, "primary");
  const textColor = useThemeColor({}, "text");
  const subtitleColor = useThemeColor({}, "subtitle");

  useEffect(() => {
    if (petType && gender && style) {
      generate(petType, gender, style);
    }
  }, []);

  const handleSave = async () => {
    if (currentName && !saved) {
      await addFavorite({
        name: currentName.name,
        petType,
        gender,
        style,
      });
      setSaved(true);
    }
  };

  const handleShare = async () => {
    if (currentName) {
      await Share.share({
        message: `I named my pet "${currentName.name}" with NameMyPet! 🐾`,
      });
    }
  };

  const emoji = PET_EMOJI[petType] || "🐾";

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <View style={styles.container}>
        <Header title="Your pet's new name" />
        <FloatingBackButton onPress={() => router.back()} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.emojiContainer}>
            <Text style={styles.bigEmoji}>{emoji}</Text>
          </View>

          {currentName && (
            <>
              <Text style={[styles.name, { color: textColor }]}>
                {currentName.name}
              </Text>
              <Text style={[styles.description, { color: subtitleColor }]}>
                {currentName.description}
              </Text>
            </>
          )}

          <View style={styles.actions}>
            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                { backgroundColor: primary },
                pressed && styles.pressed,
              ]}
              onPress={regenerate}
            >
              <Text style={styles.primaryButtonText}>
                Generate Another Name
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                { borderColor: primary },
                pressed && styles.secondaryPressed,
              ]}
              onPress={handleSave}
            >
              <Text style={[styles.secondaryButtonText, { color: primary }]}>
                {saved ? "✓ Saved!" : "Save to Favorites"}
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.shareButton,
                pressed && styles.pressed,
              ]}
              onPress={handleShare}
            >
              <Text style={styles.shareEmoji}>📤</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  emojiContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  bigEmoji: { fontSize: 56 },
  name: {
    fontSize: 48,
    fontWeight: "700",
    letterSpacing: -1,
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  actions: {
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
    gap: 12,
  },
  primaryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    shadowColor: "#3498DB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    borderWidth: 2,
  },
  secondaryPressed: {
    backgroundColor: "#F0F7FF",
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  shareButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  shareEmoji: { fontSize: 24 },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
});
