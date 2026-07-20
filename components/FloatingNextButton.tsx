import { useThemeColor } from "@/hooks/use-theme-color";
import { useTranslation } from "@/i18n/context";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface FloatingNextButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

export default function FloatingNextButton({
  onPress,
  disabled = false,
}: FloatingNextButtonProps) {
  const { t } = useTranslation();
  const primary = useThemeColor({}, "primary") || "#3B82F6";
  const disabledColor = useThemeColor({}, "disabled") || "#D1D5DB";
  const textColor = "#FFFFFF";

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: disabled ? disabledColor : primary },
        pressed && !disabled && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{t("common.next")}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 40,
    right: 16,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 50,
    shadowColor: "#3498DB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
    zIndex: 10,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
