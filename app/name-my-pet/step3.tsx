import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomTabBar from "../../components/BottomTabBar";

type StyleType =
  | "Classic"
  | "Cute"
  | "Funny"
  | "Elegant"
  | "Mythological"
  | "Fantasy"
  | "Nature"
  | "Food Inspired"
  | "Strong"
  | "Royal"
  | "Geek"
  | "Playful";

interface StyleOption {
  id: StyleType;
  name: string;
  emoji: string;
}

const NameMyPetStep3: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const petType = params.petType as string;
  const gender = params.gender as string;

  const [selectedStyle, setSelectedStyle] = useState<StyleType | null>(null);

  const styleOptions: StyleOption[] = [
    { id: "Classic", name: "Classic", emoji: "👔" },
    { id: "Cute", name: "Cute", emoji: "🥰" },
    { id: "Funny", name: "Funny", emoji: "😂" },
    { id: "Elegant", name: "Elegant", emoji: "✨" },
    { id: "Mythological", name: "Mythological", emoji: "⚡" },
    { id: "Fantasy", name: "Fantasy", emoji: "🐉" },
    { id: "Nature", name: "Nature", emoji: "🌿" },
    { id: "Food Inspired", name: "Food Inspired", emoji: "🍕" },
    { id: "Strong", name: "Strong", emoji: "💪" },
    { id: "Royal", name: "Royal", emoji: "👑" },
    { id: "Geek", name: "Geek", emoji: "🤓" },
    { id: "Playful", name: "Playful", emoji: "🎮" },
  ];

  const handleStyleSelect = (styleId: StyleType) => {
    setSelectedStyle(styleId);
  };

  const handleNext = () => {
    if (selectedStyle) {
      router.push({
        pathname: "/name-my-pet/step4",
        params: {
          petType: petType,
          gender: gender,
          style: selectedStyle,
        },
      });
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        {/* Botón de retroceso */}
        <Pressable style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        {/* Encabezado con título y subtítulo */}
        <View style={styles.header}>
          <Text style={styles.title}>
            What style of name are you looking for?
          </Text>
          <Text style={styles.subtitle}>
            Choose the style you like the most.
          </Text>
          {petType && gender && (
            <Text style={styles.petInfo}>
              For your {petType} • {gender} 🐾
            </Text>
          )}
        </View>

        {/* Grid de estilos */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.gridContainer}>
            {styleOptions.map((style) => (
              <Pressable
                key={style.id}
                style={({ pressed }) => [
                  styles.styleCard,
                  selectedStyle === style.id && styles.styleCardSelected,
                  pressed && styles.styleCardPressed,
                ]}
                onPress={() => handleStyleSelect(style.id)}
              >
                <View style={styles.cardContent}>
                  <Text style={styles.styleEmoji}>{style.emoji}</Text>
                  <Text style={styles.styleName}>{style.name}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* Botón Next flotante */}
        <Pressable
          style={({ pressed }) => [
            styles.nextButton,
            (!selectedStyle || pressed) && styles.nextButtonDisabled,
            pressed && styles.nextButtonPressed,
          ]}
          onPress={handleNext}
          disabled={!selectedStyle}
        >
          <Text style={styles.nextButtonText}>Next →</Text>
        </Pressable>

        {/* Bottom Tab Bar - Componente reutilizable */}
        <BottomTabBar activeTab="home" />
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");
const cardSize = (width - 52) / 3;

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
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
  },
  backButtonText: {
    fontSize: 16,
    color: "#3498DB",
    fontWeight: "500",
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    letterSpacing: -0.5,
    lineHeight: 34,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6B6B6B",
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  petInfo: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3498DB",
    marginTop: 6,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 6,
  },
  styleCard: {
    width: cardSize,
    height: cardSize,
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  styleCardSelected: {
    backgroundColor: "#EBF5FB",
    borderColor: "#3498DB",
    shadowColor: "#3498DB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  styleCardPressed: {
    transform: [{ scale: 0.95 }],
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  styleEmoji: {
    fontSize: 32,
    marginBottom: 6,
  },
  styleName: {
    fontSize: 11,
    fontWeight: "500",
    color: "#1A1A1A",
    textAlign: "center",
    letterSpacing: 0.2,
  },
  nextButton: {
    position: "absolute",
    bottom: 90,
    right: 16,
    backgroundColor: "#3498DB",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 50,
    shadowColor: "#3498DB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
    zIndex: 10,
  },
  nextButtonDisabled: {
    backgroundColor: "#D1D5DB",
    shadowOpacity: 0,
  },
  nextButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default NameMyPetStep3;
