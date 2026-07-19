import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomTabBar from "../../components/BottomTabBar";

interface GeneratedName {
  name: string;
  description: string;
}

const NameMyPetStep4: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const petType = params.petType as string;
  const gender = params.gender as string;
  const style = params.style as string;

  const [currentName, setCurrentName] = useState<GeneratedName>({
    name: "Rocky",
    description: "A playful and memorable name for your new companion.",
  });

  // Generar nombres según las preferencias
  const generateName = () => {
    const nameOptions: Record<string, GeneratedName[]> = {
      Dog: [
        {
          name: "Max",
          description: "A strong and loyal name for your faithful friend.",
        },
        {
          name: "Bella",
          description: "A beautiful and elegant name for your princess.",
        },
        {
          name: "Charlie",
          description: "A friendly and cheerful name that brings joy.",
        },
        {
          name: "Lucy",
          description: "A bright and shining name for your star.",
        },
        {
          name: "Cooper",
          description: "A classic and dependable name for your buddy.",
        },
        {
          name: "Rocky",
          description: "A playful and memorable name for your new companion.",
        },
      ],
      Cat: [
        {
          name: "Luna",
          description: "A mystical name for your moonlit companion.",
        },
        {
          name: "Oliver",
          description: "A sophisticated name for your refined friend.",
        },
        {
          name: "Milo",
          description: "A playful and curious name for your explorer.",
        },
        { name: "Simba", description: "A royal name for your little lion." },
        {
          name: "Whiskers",
          description: "A charming name for your whiskered friend.",
        },
      ],
      Default: [
        {
          name: "Rocky",
          description: "A playful and memorable name for your new companion.",
        },
        {
          name: "Coco",
          description: "A sweet and delightful name full of personality.",
        },
        {
          name: "Leo",
          description: "A brave and noble name for your courageous friend.",
        },
        {
          name: "Mia",
          description: "A gentle and loving name for your precious one.",
        },
        {
          name: "Zeus",
          description: "A powerful and majestic name for your ruler.",
        },
      ],
    };

    const options =
      nameOptions[petType as keyof typeof nameOptions] ||
      nameOptions["Default"];
    const randomIndex = Math.floor(Math.random() * options.length);
    setCurrentName(options[randomIndex]);
  };

  useEffect(() => {
    generateName();
  }, []);

  const handleGenerateAnother = () => {
    generateName();
  };

  const handleSaveToFavorites = () => {
    console.log("Saved to favorites:", currentName.name);
    // Aquí iría la lógica para guardar en favoritos
  };

  const handleShare = () => {
    console.log("Sharing:", currentName.name);
    // Aquí iría la lógica para compartir
  };

  const getPetEmoji = () => {
    const emojiMap: Record<string, string> = {
      Dog: "🐕",
      Cat: "🐈",
      Rabbit: "🐇",
      Bird: "🐦",
      Hamster: "🐹",
      Turtle: "🐢",
      Fish: "🐟",
      Horse: "🐴",
    };
    return emojiMap[petType] || "🐾";
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Pet Illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationBackground}>
              <Text style={styles.petEmoji}>{getPetEmoji()}</Text>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Your pet's new name</Text>

          {/* Generated Name */}
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{currentName.name}</Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>{currentName.description}</Text>

          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            {/* Primary Button */}
            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.primaryButtonPressed,
              ]}
              onPress={handleGenerateAnother}
            >
              <Text style={styles.primaryButtonText}>
                Generate Another Name
              </Text>
            </Pressable>

            {/* Secondary Outlined Button */}
            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                pressed && styles.secondaryButtonPressed,
              ]}
              onPress={handleSaveToFavorites}
            >
              <Text style={styles.secondaryButtonText}>Save to Favorites</Text>
            </Pressable>

            {/* Share Button */}
            <Pressable
              style={({ pressed }) => [
                styles.shareButton,
                pressed && styles.shareButtonPressed,
              ]}
              onPress={handleShare}
            >
              <Ionicons name="share-outline" size={24} color="#3498DB" />
            </Pressable>
          </View>
        </ScrollView>

        {/* Bottom Tab Bar - Componente reutilizable */}
        <BottomTabBar activeTab="home" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationContainer: {
    marginBottom: 24,
  },
  illustrationBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#EBF5FB",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#3498DB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },
  petEmoji: {
    fontSize: 56,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6B6B6B",
    letterSpacing: 0.5,
    marginBottom: 12,
    textTransform: "uppercase",
  },
  nameContainer: {
    marginBottom: 16,
  },
  nameText: {
    fontSize: 52,
    fontWeight: "700",
    color: "#1A1A1A",
    letterSpacing: -1,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6B6B6B",
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  actionsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#3498DB",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    width: "100%",
    maxWidth: 320,
    shadowColor: "#3498DB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  primaryButtonPressed: {
    transform: [{ scale: 0.97 }],
    shadowOpacity: 0.1,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 50,
    width: "100%",
    maxWidth: 320,
    borderWidth: 2,
    borderColor: "#3498DB",
  },
  secondaryButtonPressed: {
    transform: [{ scale: 0.97 }],
    backgroundColor: "#F0F7FF",
  },
  secondaryButtonText: {
    color: "#3498DB",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  shareButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F8F9FA",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  shareButtonPressed: {
    transform: [{ scale: 0.92 }],
    backgroundColor: "#F0F0F0",
  },
});

export default NameMyPetStep4;
