import { useRouter } from "expo-router";
import { useState } from "react";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "@/i18n/context";
import { useThemeColor } from "@/hooks/use-theme-color";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import FloatingNextButton from "@/components/FloatingNextButton";
import type { PetType } from "@/types";

const PETS: { id: PetType; emoji: string; labelKey: string }[] = [
  { id: "Dog", emoji: "🐕", labelKey: "pets.option.Dog" },
  { id: "Cat", emoji: "🐈", labelKey: "pets.option.Cat" },
  { id: "Rabbit", emoji: "🐇", labelKey: "pets.option.Rabbit" },
  { id: "Bird", emoji: "🐦", labelKey: "pets.option.Bird" },
  { id: "Hamster", emoji: "🐹", labelKey: "pets.option.Hamster" },
  { id: "Turtle", emoji: "🐢", labelKey: "pets.option.Turtle" },
  { id: "Fish", emoji: "🐟", labelKey: "pets.option.Fish" },
  { id: "Horse", emoji: "🐴", labelKey: "pets.option.Horse" },
  { id: "Pig", emoji: "🐷", labelKey: "pets.option.Pig" },
];

export default function PetScreen() {
  const router = useRouter();
  const { t } = useTranslation();
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
          title={t("pets.title")}
          subtitle={t("pets.subtitle")}
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
                label={t(pet.labelKey)}
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
