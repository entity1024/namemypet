import { useTranslation } from "@/i18n/context";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const ORANGE = "#F97316";

interface FloatingBackButtonProps {
  onPress: () => void;
}

export default function FloatingBackButton({
  onPress,
}: FloatingBackButtonProps) {
  const { t } = useTranslation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: ORANGE },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{t("common.back")}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 40,
    left: 16,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 50,
    shadowColor: ORANGE,
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
