import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface BottomTabBarProps {
  activeTab?: "home" | "favorites" | "about";
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab = "home" }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Determinar qué tab está activa basado en la ruta actual
  const getActiveTab = () => {
    if (pathname === "/" || pathname === "/index") return "home";
    if (pathname === "/favorites") return "favorites";
    if (pathname === "/about") return "about";
    return activeTab;
  };

  const currentTab = getActiveTab();

  const handleNavigation = (tab: string) => {
    switch (tab) {
      case "home":
        router.push("/" as any);
        break;
      case "favorites":
        router.push("/favorites" as any);
        break;
      case "about":
        router.push("/about" as any);
        break;
    }
  };

  return (
    <View style={styles.bottomTabBar}>
      <Pressable
        style={styles.tabItem}
        onPress={() => handleNavigation("home")}
      >
        <Ionicons
          name={currentTab === "home" ? "home" : "home-outline"}
          size={24}
          color={currentTab === "home" ? "#3498DB" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.tabLabel,
            currentTab === "home" && styles.tabLabelActive,
          ]}
        >
          Home
        </Text>
      </Pressable>

      <Pressable
        style={styles.tabItem}
        onPress={() => handleNavigation("favorites")}
      >
        <Ionicons
          name={currentTab === "favorites" ? "heart" : "heart-outline"}
          size={24}
          color={currentTab === "favorites" ? "#3498DB" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.tabLabel,
            currentTab === "favorites" && styles.tabLabelActive,
          ]}
        >
          Favorites
        </Text>
      </Pressable>

      <Pressable
        style={styles.tabItem}
        onPress={() => handleNavigation("about")}
      >
        <Ionicons
          name={
            currentTab === "about"
              ? "information-circle"
              : "information-circle-outline"
          }
          size={24}
          color={currentTab === "about" ? "#3498DB" : "#9CA3AF"}
        />
        <Text
          style={[
            styles.tabLabel,
            currentTab === "about" && styles.tabLabelActive,
          ]}
        >
          About
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 74,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingBottom: 8,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tabLabel: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 2,
    fontWeight: "500",
  },
  tabLabelActive: {
    color: "#3498DB",
  },
});

export default BottomTabBar;
