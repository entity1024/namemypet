import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Favorite {
  id: string;
  name: string;
  petType: string;
  gender: string;
  style: string;
  timestamp: string;
}

const FavoritesScreen: React.FC = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga de favoritos
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    // Aquí iría la lógica para cargar desde AsyncStorage
    // Por ahora usamos datos de ejemplo
    const mockFavorites: Favorite[] = [
      {
        id: "1",
        name: "Rocky",
        petType: "Dog",
        gender: "Male",
        style: "Classic",
        timestamp: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Luna",
        petType: "Cat",
        gender: "Female",
        style: "Elegant",
        timestamp: new Date().toISOString(),
      },
      {
        id: "3",
        name: "Max",
        petType: "Dog",
        gender: "Male",
        style: "Strong",
        timestamp: new Date().toISOString(),
      },
    ];
    setFavorites(mockFavorites);
    setIsLoading(false);
  };

  const handleRemoveFavorite = (id: string) => {
    // Aquí iría la lógica para eliminar de AsyncStorage
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const getPetEmoji = (petType: string) => {
    const emojiMap: Record<string, string> = {
      Dog: "🐕",
      Cat: "🐈",
      Rabbit: "🐇",
      Bird: "🐦",
      Hamster: "🐹",
      Turtle: "🐢",
      Fish: "🐟",
      Horse: "🐴",
    };
    return emojiMap[petType] || "🐾";
  };

  const getGenderEmoji = (gender: string) => {
    const emojiMap: Record<string, string> = {
      Male: "👦",
      Female: "👧",
      Either: "🌟",
    };
    return emojiMap[gender] || "🌟";
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="heart-outline" size={80} color="#D1D5DB" />
      <Text style={styles.emptyTitle}>No favorites yet</Text>
      <Text style={styles.emptySubtitle}>Names you save will appear here</Text>
      <Pressable style={styles.emptyButton} onPress={() => {}}>
        <Text style={styles.emptyButtonText}>Find a name</Text>
      </Pressable>
    </View>
  );

  const renderFavoriteItem = ({ item }: { item: Favorite }) => (
    <View style={styles.favoriteCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardIconContainer}>
          <Text style={styles.cardEmoji}>{getPetEmoji(item.petType)}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{item.name}</Text>
          <View style={styles.cardTags}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{item.petType}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>
                {getGenderEmoji(item.gender)} {item.gender}
              </Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{item.style}</Text>
            </View>
          </View>
          <Text style={styles.cardDate}>
            Saved on {formatDate(item.timestamp)}
          </Text>
        </View>
      </View>
      <View style={styles.cardActions}>
        <Pressable
          style={styles.actionButton}
          onPress={() => handleRemoveFavorite(item.id)}
        >
          <Ionicons name="trash-outline" size={20} color="#EF4444" />
          <Text style={styles.actionButtonText}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.title}>Favorites</Text>
          <Text style={styles.subtitle}>Your saved pet names</Text>
        </View>

        {/* Lista de favoritos */}
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading favorites...</Text>
          </View>
        ) : (
          <FlatList
            data={favorites}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyState}
          />
        )}

        {/* Bottom Tab Bar - Componente reutilizable 
        <BottomTabBar activeTab="favorites" />
        */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A1A1A",
    letterSpacing: -0.5,
    lineHeight: 34,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6B6B6B",
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    flexGrow: 1,
  },
  // Estado vacío
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A1A1A",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#6B6B6B",
    textAlign: "center",
    marginBottom: 24,
  },
  emptyButton: {
    backgroundColor: "#3498DB",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 50,
  },
  emptyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  // Loading
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  // Tarjeta de favorito
  favoriteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EBF5FB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardEmoji: {
    fontSize: 24,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  cardTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 4,
  },
  tag: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  tagText: {
    fontSize: 11,
    color: "#6B6B6B",
    fontWeight: "500",
  },
  cardDate: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  actionButtonText: {
    fontSize: 14,
    color: "#EF4444",
    marginLeft: 4,
    fontWeight: "500",
  },
});

export default FavoritesScreen;
