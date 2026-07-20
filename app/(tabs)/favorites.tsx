import { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "@/i18n/context";
import { useThemeColor } from "@/hooks/use-theme-color";
import EmptyState from "@/components/EmptyState";
import { getFavorites, removeFavorite } from "@/services/favorites";
import type { Favorite } from "@/types";

const PET_EMOJI: Record<string, string> = {
  Dog: "🐕", Cat: "🐈", Rabbit: "🐇", Bird: "🐦",
  Hamster: "🐹", Turtle: "🐢", Fish: "🐟", Horse: "🐴", Pig: "🐷",
};

export default function FavoritesScreen() {
  const router = useRouter();
  const { t, language } = useTranslation();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const bgColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subtitleColor = useThemeColor({}, "subtitle");
  const cardBg = useThemeColor({}, "cardBackground");
  const danger = useThemeColor({}, "danger");
  const border = useThemeColor({}, "border");
  const tagBg = useThemeColor({}, "tagBackground");

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  const handleRemove = async (id: string) => {
    await removeFavorite(id);
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const renderItem = ({ item }: { item: Favorite }) => (
    <View style={[styles.card, { backgroundColor: cardBg, borderColor: border }]}>
      <View style={styles.cardContent}>
        <Text style={styles.cardEmoji}>{PET_EMOJI[item.petType] || "🐾"}</Text>
        <View style={styles.cardInfo}>
          <Text style={[styles.cardName, { color: textColor }]}>{item.name}</Text>
          <View style={styles.tags}>
            <View style={[styles.tag, { backgroundColor: tagBg }]}>
              <Text style={[styles.tagText, { color: subtitleColor }]}>{item.petType}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: tagBg }]}>
              <Text style={[styles.tagText, { color: subtitleColor }]}>{item.gender}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: tagBg }]}>
              <Text style={[styles.tagText, { color: subtitleColor }]}>{item.style}</Text>
            </View>
          </View>
          <Text style={[styles.date, { color: subtitleColor }]}>
            {t("favorites.savedOn", { date: formatDate(item.timestamp) })}
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.removeButton}
        onPress={() => handleRemove(item.id)}
      >
        <Text style={[styles.removeText, { color: danger }]}>{t("favorites.remove")}</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: textColor }]}>{t("favorites.title")}</Text>
          <Text style={[styles.subtitle, { color: subtitleColor }]}>
            {t("favorites.subtitle")}
          </Text>
        </View>
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyState
              icon="💝"
              title={t("favorites.emptyTitle")}
              subtitle={t("favorites.emptySubtitle")}
              actionLabel={t("favorites.emptyAction")}
              onAction={() => router.push("/")}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16 },
  title: { fontSize: 28, fontWeight: "700", letterSpacing: -0.5, marginBottom: 4 },
  subtitle: { fontSize: 16 },
  list: { paddingHorizontal: 20, paddingBottom: 100, flexGrow: 1 },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardEmoji: { fontSize: 32, marginRight: 12 },
  cardInfo: { flex: 1 },
  cardName: { fontSize: 18, fontWeight: "600", marginBottom: 6 },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginBottom: 4 },
  tag: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  tagText: { fontSize: 11, fontWeight: "500" },
  date: { fontSize: 12 },
  removeButton: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    alignItems: "flex-end",
  },
  removeText: { fontSize: 14, fontWeight: "500" },
});
