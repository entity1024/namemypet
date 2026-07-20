import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "@/i18n/context";
import { useThemeColor } from "@/hooks/use-theme-color";
import Header from "@/components/Header";
import OptionCard from "@/components/OptionCard";
import FloatingBackButton from "@/components/FloatingBackButton";
import FloatingNextButton from "@/components/FloatingNextButton";
import type { StyleType } from "@/types";

const STYLES: { id: StyleType; emoji: string; labelKey: string }[] = [
  { id: "Classic", emoji: "👔", labelKey: "style.option.Classic" },
  { id: "Cute", emoji: "🥰", labelKey: "style.option.Cute" },
  { id: "Funny", emoji: "😂", labelKey: "style.option.Funny" },
  { id: "Elegant", emoji: "✨", labelKey: "style.option.Elegant" },
  { id: "Mythological", emoji: "⚡", labelKey: "style.option.Mythological" },
  { id: "Fantasy", emoji: "🐉", labelKey: "style.option.Fantasy" },
  { id: "Nature", emoji: "🌿", labelKey: "style.option.Nature" },
  { id: "Food Inspired", emoji: "🍕", labelKey: "style.option.Food Inspired" },
  { id: "Strong", emoji: "💪", labelKey: "style.option.Strong" },
  { id: "Royal", emoji: "👑", labelKey: "style.option.Royal" },
  { id: "Geek", emoji: "🤓", labelKey: "style.option.Geek" },
  { id: "Playful", emoji: "🎮", labelKey: "style.option.Playful" },
];

export default function StyleScreen() {
  const router = useRouter();
  const { t } = useTranslation();
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
          title={t("style.title")}
          subtitle={t("style.subtitle")}
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
                label={t(s.labelKey)}
                selected={selected === s.id}
                onPress={() => setSelected(s.id)}
                variant="grid"
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
