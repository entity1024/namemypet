import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="name-my-pet" />
      <Stack.Screen name="favorites" />
      <Stack.Screen name="about" />
    </Stack>
  );
}
