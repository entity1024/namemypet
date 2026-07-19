import { Stack } from "expo-router";

export default function WizardLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="pet" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="style" />
      <Stack.Screen name="result" />
    </Stack>
  );
}
