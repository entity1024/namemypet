import FloatingBackButton from "@/components/FloatingBackButton";
import FloatingNextButton from "@/components/FloatingNextButton";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import { useThemeColor } from "@/hooks/use-theme-color";
import type { Gender } from "@/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GENDERS: {
  id: Gender;
  emoji: string;
  iconName: "male" | "female" | "star";
  label: string;
}[] = [
  { id: "Male", emoji: "👦", iconName: "male", label: "Male" },
  { id: "Female", emoji: "👧", iconName: "female", label: "Female" },
  { id: "Either", emoji: "🌟", iconName: "star", label: "Any" },
];

export default function GenderScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const petType = params.petType as string;
  const [selected, setSelected] = useState<Gender | null>(null);
  const bgColor = useThemeColor({}, "background");
  const primary = useThemeColor({}, "primary");
  const iconColor = useThemeColor({}, "icon");
  const genderColors: Record<string, string> = {
    Male: primary,
    Female: useThemeColor({}, "danger") || "#EF4444",
    Any: iconColor,
  };

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
                iconName={g.iconName}
                iconColor={genderColors[g.id]}
                label={g.label}
                selected={selected === g.id}
                onPress={() => setSelected(g.id)}
                variant="list"
              />
            ))}
          </View>
        </ScrollView>
        <FloatingNextButton onPress={handleNext} disabled={!selected} />
        <FloatingBackButton onPress={() => router.back()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 100, paddingTop: 8 },
  list: {
    paddingTop: 8,
  },
});
