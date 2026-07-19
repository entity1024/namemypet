import { useRouter } from "expo-router";
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

type PetType =
  | "Dog"
  | "Cat"
  | "Rabbit"
  | "Bird"
  | "Hamster"
  | "Turtle"
  | "Fish"
  | "Horse";

interface Pet {
  id: PetType;
  name: string;
  emoji: string;
}

const NameMyPetStep1: React.FC = () => {
  const router = useRouter();
  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);

  const pets: Pet[] = [
    { id: "Dog", name: "Dog", emoji: "🐕" },
    { id: "Cat", name: "Cat", emoji: "🐈" },
    { id: "Rabbit", name: "Rabbit", emoji: "🐇" },
    { id: "Bird", name: "Bird", emoji: "🐦" },
    { id: "Hamster", name: "Hamster", emoji: "🐹" },
    { id: "Turtle", name: "Turtle", emoji: "🐢" },
    { id: "Fish", name: "Fish", emoji: "🐟" },
    { id: "Horse", name: "Horse", emoji: "🐴" },
  ];

  const handlePetSelect = (petId: PetType) => {
    setSelectedPet(petId);
  };

  const handleNext = () => {
    if (selectedPet) {
      router.push({
        pathname: "/name-my-pet/step2",
        params: { petType: selectedPet },
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        {/* Encabezado con título y subtítulo */}
        <View style={styles.header}>
          <Text style={styles.title}>What kind of pet do you have?</Text>
          <Text style={styles.subtitle}>
            Choose your pet to receive personalized name suggestions.
          </Text>
        </View>

        {/* Grid de mascotas */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.gridContainer}>
            {pets.map((pet) => (
              <Pressable
                key={pet.id}
                style={({ pressed }) => [
                  styles.petCard,
                  selectedPet === pet.id && styles.petCardSelected,
                  pressed && styles.petCardPressed,
                ]}
                onPress={() => handlePetSelect(pet.id)}
              >
                <View style={styles.cardContent}>
                  <Text style={styles.petEmoji}>{pet.emoji}</Text>
                  <Text style={styles.petName}>{pet.name}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>

        {/* Botón Next flotante */}
        <Pressable
          style={({ pressed }) => [
            styles.nextButton,
            (!selectedPet || pressed) && styles.nextButtonDisabled,
            pressed && styles.nextButtonPressed,
          ]}
          onPress={handleNext}
          disabled={!selectedPet}
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
const cardSize = (width - 48) / 4;

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
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
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
    gap: 8,
  },
  petCard: {
    width: cardSize,
    height: cardSize,
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
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
  petCardSelected: {
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
  petCardPressed: {
    transform: [{ scale: 0.96 }],
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  petEmoji: {
    fontSize: 32,
    marginBottom: 6,
  },
  petName: {
    fontSize: 12,
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

export default NameMyPetStep1;
