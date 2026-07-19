import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Definimos tipos para las props y el tipo de navegación
type PetType = "dog" | "cat" | "rabbit" | "hamster" | "bird" | "turtle";

interface PetOption {
  id: PetType;
  label: string;
}

type RootStackParamList = {
  NameMyPetStep1: undefined;
  NameMyPetStep2: { pet: PetType };
  // Agrega más rutas según tu app
};

// Componente de ícono simple (emoji)
const PetIcon: React.FC<{ type: PetType }> = ({ type }) => {
  const emojiMap: Record<PetType, string> = {
    dog: "🐶",
    cat: "🐱",
    rabbit: "🐰",
    hamster: "🐹",
    bird: "🐦",
    turtle: "🐢",
  };
  return <Text style={styles.icon}>{emojiMap[type] || "?"}</Text>;
};

const NameMyPetStep1: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);

  const pets: PetOption[] = [
    { id: "dog", label: "Dog" },
    { id: "cat", label: "Cat" },
    { id: "rabbit", label: "Rabbit" },
    { id: "hamster", label: "Hamster" },
    { id: "bird", label: "Bird" },
    { id: "turtle", label: "Turtle" },
  ];

  const handleSelect = (petId: PetType) => {
    setSelectedPet(petId);
  };

  const handleContinue = () => {
    if (!selectedPet) return;
    navigation.navigate("NameMyPetStep2", { pet: selectedPet });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>pets NameMyPet</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>?</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.stepText}>STEP 1 OF 4</Text>
          <Text style={styles.progressText}>25% Complete</Text>
        </View>
        <View style={styles.progressBarOuter}>
          <View style={[styles.progressBarInner, { width: "25%" }]} />
        </View>

        {/* Title & subtitle */}
        <Text style={styles.title}>What pet do you have?</Text>
        <Text style={styles.subtitle}>
          Choose your animal companion to help us find the perfect name
          personality.
        </Text>

        {/* Pet grid (2 columns) */}
        <View style={styles.petGrid}>
          {pets.map((pet) => (
            <TouchableOpacity
              key={pet.id}
              style={
                [
                  styles.petCard,
                  selectedPet === pet.id && styles.petCardSelected,
                ] as StyleProp<ViewStyle>
              }
              onPress={() => handleSelect(pet.id)}
            >
              <PetIcon type={pet.id} />
              <Text style={styles.petLabel}>{pet.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue button */}
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedPet && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedPet}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom navigation mock */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <Text>🏠</Text>
          </View>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <Text>❤️</Text>
          </View>
          <Text style={styles.navLabel}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navIcon}>
            <Text>ℹ️</Text>
          </View>
          <Text style={styles.navLabel}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4338CA",
  },
  helpButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  helpText: {
    fontSize: 16,
    color: "#4B5563",
  },
  content: {
    padding: 20,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  stepText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
  },
  progressText: {
    fontSize: 14,
    color: "#6B7280",
  },
  progressBarOuter: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    marginBottom: 32,
  },
  progressBarInner: {
    height: "100%",
    backgroundColor: "#7C3AED",
    borderRadius: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    lineHeight: 24,
    marginBottom: 32,
  },
  petGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  petCard: {
    flex: 1,
    minWidth: 140,
    maxWidth: 160,
    aspectRatio: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  petCardSelected: {
    backgroundColor: "#F5F3FF",
    borderColor: "#7C3AED",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    fontSize: 48,
    marginBottom: 12,
  },
  petLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    textAlign: "center",
  },
  continueButton: {
    marginTop: 40,
    backgroundColor: "#A78BFA",
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  continueButtonDisabled: {
    backgroundColor: "#D1D5DB",
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginRight: 8,
  },
  arrow: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingVertical: 12,
    paddingBottom: Platform.OS === "ios" ? 20 : 12,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: "#4B5563",
    fontWeight: "500",
  },
});

export default NameMyPetStep1;
