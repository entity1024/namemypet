import AsyncStorage from "@react-native-async-storage/async-storage";
import { Favorite, PetType, Gender, StyleType } from "@/types";

const FAVORITES_KEY = "namemypet_favorites";

export async function getFavorites(): Promise<Favorite[]> {
  try {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function addFavorite(
  item: Omit<Favorite, "id" | "timestamp">
): Promise<Favorite> {
  const favorite: Favorite = {
    ...item,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    timestamp: Date.now(),
  };
  const favorites = await getFavorites();
  favorites.push(favorite);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorite;
}

export async function removeFavorite(id: string): Promise<void> {
  const favorites = await getFavorites();
  const filtered = favorites.filter((f) => f.id !== id);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
}

export async function isFavorite(name: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.some(
    (f) => f.name.toLowerCase() === name.toLowerCase()
  );
}
