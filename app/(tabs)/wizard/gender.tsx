import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import FloatingNextButton from "@/components/FloatingNextButton";
import type { Gender } from "@/types";

const GENDERS: { id: Gender; emoji: string; label: string }[] = [
  { id: "Male", emoji: "👦", label: "Male" },
  { id: "Female", emoji: "👧", label: "Female" },
  { id: "Either", emoji: "🌟", label: "Either" },
];

export default function GenderScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const petType = params.petType as string;
  const [selected, setSelected] = useState<Gender | null>(null);
  const bgColor = useThemeColor({}, "background");

  const handleNext = () => {
    if (selected) {
      router.push({
        pathname: "/wizard/style",
        params: { petType, gender: selected },
      });
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <View style={styles.container}>
        <Header
          title="Choose the gender"
          subtitle="This helps us generate more personalized names."
          currentStep={2}
          totalSteps={4}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.list}>
            {GENDERS.map((g) => (
              <OptionCard
                key={g.id}
                emoji={g.emoji}
                label={g.label}
                selected={selected === g.id}
                onPress={() => setSelected(g.id)}
                variant="list"
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
  list: {
    paddingTop: 8,
  },
});
