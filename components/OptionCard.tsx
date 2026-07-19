import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

interface OptionCardProps {
  emoji: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  label: string;
  selected: boolean;
  onPress: () => void;
  variant?: "grid" | "list";
  columns?: number;
}

export default function OptionCard({
  emoji,
  iconName,
  iconColor,
  label,
  selected,
  onPress,
  variant = "grid",
  columns = 3,
}: OptionCardProps) {
  const backgroundColor = useThemeColor({}, "cardBackground") || "#F8F9FA";
  const selectedBackground = useThemeColor({}, "selectedBackground") || "#EBF5FB";
  const borderColor = useThemeColor({}, "primary") || "#3498DB";
  const textColor = useThemeColor({}, "text") || "#1A1A1A";

  return (
    <Pressable
      style={({ pressed }) => [
        variant === "grid"
          ? { ...styles.gridCard, width: `${(100 - (columns - 1) * 2) / columns}%` }
          : styles.listCard,
        { backgroundColor: selected ? selectedBackground : backgroundColor },
        selected && { borderColor: borderColor, borderWidth: 2 },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {iconName ? (
        <Ionicons
          name={iconName}
          size={28}
          color={iconColor || useThemeColor({}, "text")}
          style={styles.iconStyle}
        />
      ) : (
        <Text style={styles.emoji}>{emoji}</Text>
      )}
      <Text
        style={[styles.label, { color: textColor }]}
        numberOfLines={2}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  gridCard: {
    width: "23%",
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "transparent",
    padding: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  listCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
  },
  emoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  iconStyle: {
    marginBottom: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
  },
});
