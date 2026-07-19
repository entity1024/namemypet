import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeContext } from "@/contexts/ThemeContext";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function ThemeToggleButton() {
  const { resolvedTheme, toggleTheme } = useThemeContext();
  const insets = useSafeAreaInsets();
  const bgColor = useThemeColor({}, "cardBackground");
  const borderColor = useThemeColor({}, "border");

  const icon = resolvedTheme === "light" ? "🌙" : "☀️";

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
      onPress={toggleTheme}
    >
      <Text style={styles.icon}>{icon}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 16,
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
  icon: {
    fontSize: 20,
  },
  pressed: {
    transform: [{ scale: 0.92 }],
    opacity: 0.8,
  },
});
