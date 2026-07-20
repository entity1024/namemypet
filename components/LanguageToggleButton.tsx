import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "@/i18n/context";
import { useThemeColor } from "@/hooks/use-theme-color";

interface LanguageToggleButtonProps {
  onPress: () => void;
}

export default function LanguageToggleButton({
  onPress,
}: LanguageToggleButtonProps) {
  const { language } = useTranslation();
  const insets = useSafeAreaInsets();
  const bgColor = useThemeColor({}, "cardBackground");
  const borderColor = useThemeColor({}, "border");
  const iconColor = useThemeColor({}, "icon");

  const iconName = language === "en" ? "language-outline" : "language";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          top: insets.top + 8,
          backgroundColor: bgColor,
          borderColor: borderColor,
        },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={20} color={iconColor} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 64,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    zIndex: 999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  pressed: {
    transform: [{ scale: 0.92 }],
    opacity: 0.8,
  },
});
