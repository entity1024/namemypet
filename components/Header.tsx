import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

interface HeaderProps {
  title: string;
  subtitle?: string;
  currentStep?: number;
  totalSteps?: number;
  showBack?: boolean;
  onBack?: () => void;
}

export default function Header({
  title,
  subtitle,
  currentStep,
  totalSteps,
  showBack,
  onBack,
}: HeaderProps) {
  const textColor = useThemeColor({}, "text") || "#1A1A1A";
  const subtitleColor = useThemeColor({}, "subtitle") || "#6B6B6B";
  const progressBg = useThemeColor({}, "progressBackground") || "#E0E0E0";
  const progressFill = useThemeColor({}, "primary") || "#3498DB";
  const stepColor = useThemeColor({}, "subtitle") || "#7F8C8D";
  const linkColor = useThemeColor({}, "primary") || "#3498DB";

  return (
    <View style={styles.container}>
      {showBack && onBack && (
        <Pressable style={styles.backButton} onPress={onBack}>
          <Text style={[styles.backText, { color: linkColor }]}>← Back</Text>
        </Pressable>
      )}

      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, { color: subtitleColor }]}>
          {subtitle}
        </Text>
      )}

      {currentStep !== undefined && totalSteps !== undefined && (
        <View style={styles.progressSection}>
          <Text style={[styles.stepText, { color: stepColor }]}>
            STEP {currentStep} OF {totalSteps}
          </Text>
          <View style={[styles.progressBar, { backgroundColor: progressBg }]}>
            <View
              style={[
                styles.progressFill,
                {
                  backgroundColor: progressFill,
                  width: `${(currentStep / totalSteps) * 100}%`,
                },
              ]}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  backButton: {
    paddingVertical: 8,
    marginBottom: 4,
  },
  backText: {
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.5,
    lineHeight: 34,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    marginBottom: 8,
  },
  progressSection: {
    marginTop: 8,
    marginBottom: 8,
  },
  stepText: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
});
