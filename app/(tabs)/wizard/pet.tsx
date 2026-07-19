import { useRouter } from "expo-router";
import { useState } from "react";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/use-theme-color";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import FloatingNextButton from "@/components/FloatingNextButton";
import type { PetType } from "@/types";

const PETS: { id: PetType; emoji: string; label: string }[] = [
  { id: "Dog", emoji: "🐕", label: "Dog" },
  { id: "Cat", emoji: "🐈", label: "Cat" },
  { id: "Rabbit", emoji: "🐇", label: "Rabbit" },
  { id: "Bird", emoji: "🐦", label: "Bird" },
  { id: "Hamster", emoji: "🐹", label: "Hamster" },
  { id: "Turtle", emoji: "🐢", label: "Turtle" },
  { id: "Fish", emoji: "🐟", label: "Fish" },
  { id: "Horse", emoji: "🐴", label: "Horse" },
  { id: "Pig", emoji: "🐷", label: "Pig" },
];

export default function PetScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<PetType | null>(null);
  const bgColor = useThemeColor({}, "background");

  const handleNext = () => {
    if (selected) {
      router.push({ pathname: "/wizard/gender", params: { petType: selected } });
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <View style={styles.container}>
        <Header
          title="What kind of pet do you have?"
          subtitle="Choose your pet to receive personalized name suggestions."
          currentStep={1}
          totalSteps={4}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.grid}>
            {PETS.map((pet) => (
              <OptionCard
                key={pet.id}
                emoji={pet.emoji}
                label={pet.label}
                selected={selected === pet.id}
                onPress={() => setSelected(pet.id)}
                variant="grid"
              />
            ))}
          </View>
        </ScrollView>
        <FloatingNextButton onPress={handleNext} disabled={!selected} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100, paddingTop: 8 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
