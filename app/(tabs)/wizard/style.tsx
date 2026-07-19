import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import FloatingNextButton from "@/components/FloatingNextButton";
import type { StyleType } from "@/types";

const STYLES: { id: StyleType; emoji: string; label: string }[] = [
  { id: "Classic", emoji: "👔", label: "Classic" },
  { id: "Cute", emoji: "🥰", label: "Cute" },
  { id: "Funny", emoji: "😂", label: "Funny" },
  { id: "Elegant", emoji: "✨", label: "Elegant" },
  { id: "Mythological", emoji: "⚡", label: "Mythological" },
  { id: "Fantasy", emoji: "🐉", label: "Fantasy" },
  { id: "Nature", emoji: "🌿", label: "Nature" },
  { id: "Food Inspired", emoji: "🍕", label: "Food Inspired" },
  { id: "Strong", emoji: "💪", label: "Strong" },
  { id: "Royal", emoji: "👑", label: "Royal" },
  { id: "Geek", emoji: "🤓", label: "Geek" },
  { id: "Playful", emoji: "🎮", label: "Playful" },
];

export default function StyleScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const petType = params.petType as string;
  const gender = params.gender as string;
  const [selected, setSelected] = useState<StyleType | null>(null);
  const bgColor = useThemeColor({}, "background");

  const handleNext = () => {
    if (selected) {
      router.push({
        pathname: "/wizard/result",
        params: { petType, gender, style: selected },
      });
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <View style={styles.container}>
        <Header
          title="What style of name are you looking for?"
          subtitle="Choose the style you like the most."
          currentStep={3}
          totalSteps={4}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.grid}>
            {STYLES.map((s) => (
              <OptionCard
                key={s.id}
                emoji={s.emoji}
                label={s.label}
                selected={selected === s.id}
                onPress={() => setSelected(s.id)}
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 130, paddingTop: 8 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
