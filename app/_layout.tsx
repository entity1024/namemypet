import { Stack } from "expo-router";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <ThemeToggleButton />
    </ThemeProvider>
  );
}
