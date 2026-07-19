import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type PetType =
  | "Dog"
  | "Cat"
  | "Rabbit"
  | "Bird"
  | "Hamster"
  | "Turtle"
  | "Fish"
  | "Horse";

const NameMyPetStep1: React.FC = () => {
  const router = useRouter();
  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);

  const petTypes: PetType[] = [
    "Dog",
    "Cat",
    "Rabbit",
    "Bird",
    "Hamster",
    "Turtle",
    "Fish",
    "Horse",
  ];

  const handlePetSelect = (pet: PetType) => {
    setSelectedPet(pet);
  };

  const handleNext = () => {
    if (selectedPet) {
      router.push({
        pathname: "/name-my-pet/step2",
        params: { petType: selectedPet },
      });
    }
  };

  const getPetIcon = (pet: PetType): string => {
    const iconMap: Record<PetType, string> = {
      Dog: "🐕",
      Cat: "🐈",
      Rabbit: "🐇",
      Bird: "🐦",
      Hamster: "🐹",
      Turtle: "🐢",
      Fish: "🐟",
      Horse: "🐴",
    };
    return iconMap[pet];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>NameMyPet</Text>
      </View>

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <Text style={styles.stepText}>STEP 1 OF 4</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "25%" }]} />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Question */}
        <Text style={styles.question}>What kind of pet do you have?</Text>
        <Text style={styles.subQuestion}>
          Select your pet to receive personalized name suggestions.
        </Text>

        {/* Pet Grid */}
        <View style={styles.gridContainer}>
          {petTypes.map((pet) => (
            <TouchableOpacity
              key={pet}
              style={[
                styles.petCard,
                selectedPet === pet && styles.petCardSelected,
              ]}
              onPress={() => handlePetSelect(pet)}
              activeOpacity={0.7}
            >
              <Text style={styles.petEmoji}>{getPetIcon(pet)}</Text>
              <Text style={styles.petName}>{pet}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Next Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton, !selectedPet && styles.nextButtonDisabled]}
          onPress={handleNext}
          disabled={!selectedPet}
        >
          <Text style={styles.nextButtonText}>NEXT →</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation - Usando expo-router */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/")}
        >
          <Feather name="home" size={24} color="#666666" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/favorites")}
        >
          <Feather name="heart" size={24} color="#666666" />
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/about")}
        >
          <Feather name="info" size={24} color="#666666" />
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
    letterSpacing: 0.5,
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  stepText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7F8C8D",
    letterSpacing: 1,
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3498DB",
    borderRadius: 2,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginTop: 10,
    marginBottom: 8,
  },
  subQuestion: {
    fontSize: 16,
    color: "#7F8C8D",
    marginBottom: 24,
    lineHeight: 22,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: -6,
  },
  petCard: {
    width: "23%",
    aspectRatio: 1,
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
    padding: 8,
  },
  petCardSelected: {
    borderColor: "#3498DB",
    backgroundColor: "#EBF5FB",
  },
  petEmoji: {
    fontSize: 28,
    marginBottom: 4,
  },
  petName: {
    fontSize: 11,
    fontWeight: "500",
    color: "#2C3E50",
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E8ECF0",
    backgroundColor: "#FFFFFF",
  },
  nextButton: {
    backgroundColor: "#3498DB",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  nextButtonDisabled: {
    backgroundColor: "#BDC3C7",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E8ECF0",
    backgroundColor: "#FFFFFF",
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 4,
  },
  navText: {
    fontSize: 11,
    color: "#666666",
    marginTop: 4,
  },
});

export default NameMyPetStep1;
