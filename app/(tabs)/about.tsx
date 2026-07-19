import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Componente de banner publicitario (placeholder)
const AdBanner: React.FC = () => {
  // Aquí iría la integración real con Google Ads
  // Por ahora mostramos un placeholder visual

  return (
    <View style={styles.adContainer}>
      <View style={styles.adContent}>
        <View style={styles.adBadge}>
          <Text style={styles.adBadgeText}>Ad</Text>
        </View>
        <View style={styles.adTextContainer}>
          <Text style={styles.adTitle}>Discover more pet names</Text>
          <Text style={styles.adDescription}>Download the full version</Text>
        </View>
        <View style={styles.adButton}>
          <Text style={styles.adButtonText}>Learn More</Text>
        </View>
      </View>
    </View>
  );
};

// Componente de la sección About
const AboutScreen: React.FC = () => {
  const appVersion = "1.0.0";

  const handleEmailPress = () => {
    Linking.openURL("mailto:support@namemypet.com");
  };

  const handleWebsitePress = () => {
    Linking.openURL("https://namemypet.com");
  };

  const handlePrivacyPress = () => {
    Linking.openURL("https://namemypet.com/privacy");
  };

  const handleTermsPress = () => {
    Linking.openURL("https://namemypet.com/terms");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Encabezado */}
          <View style={styles.header}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.subtitle}>
              NameMyPet - Find the perfect name for your furry friend
            </Text>
          </View>

          {/* Logo/Icono de la app */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Text style={styles.logoEmoji}>🐾</Text>
            </View>
            <Text style={styles.appName}>NameMyPet</Text>
            <Text style={styles.appVersion}>Version {appVersion}</Text>
          </View>

          {/* Descripción */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About the App</Text>
            <Text style={styles.sectionText}>
              NameMyPet helps you find the perfect name for your new companion.
              With a wide variety of styles and categories, you're sure to find
              a name that matches your pet's unique personality.
            </Text>
          </View>

          {/* Características */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.featureItem}>
              <Ionicons name="paw" size={20} color="#3498DB" />
              <Text style={styles.featureText}>
                Personalized name suggestions
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="heart" size={20} color="#3498DB" />
              <Text style={styles.featureText}>Save your favorite names</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="share-social" size={20} color="#3498DB" />
              <Text style={styles.featureText}>Share names with friends</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="bulb" size={20} color="#3498DB" />
              <Text style={styles.featureText}>
                Multiple name styles to choose from
              </Text>
            </View>
          </View>

          {/* Enlaces */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Links</Text>
            <Pressable style={styles.linkItem} onPress={handleWebsitePress}>
              <Ionicons name="globe-outline" size={20} color="#3498DB" />
              <Text style={styles.linkText}>Visit Website</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9CA3AF"
                style={styles.linkArrow}
              />
            </Pressable>
            <Pressable style={styles.linkItem} onPress={handleEmailPress}>
              <Ionicons name="mail-outline" size={20} color="#3498DB" />
              <Text style={styles.linkText}>Contact Support</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9CA3AF"
                style={styles.linkArrow}
              />
            </Pressable>
            <Pressable style={styles.linkItem} onPress={handlePrivacyPress}>
              <Ionicons name="shield-outline" size={20} color="#3498DB" />
              <Text style={styles.linkText}>Privacy Policy</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9CA3AF"
                style={styles.linkArrow}
              />
            </Pressable>
            <Pressable style={styles.linkItem} onPress={handleTermsPress}>
              <Ionicons
                name="document-text-outline"
                size={20}
                color="#3498DB"
              />
              <Text style={styles.linkText}>Terms of Service</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#9CA3AF"
                style={styles.linkArrow}
              />
            </Pressable>
          </View>

          {/* Banner publicitario */}
          <View style={styles.adSection}>
            <Text style={styles.adSectionTitle}>Sponsored</Text>
            <AdBanner />
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Made with ❤️ by NameMyPet Team
            </Text>
            <Text style={styles.footerText}>
              © 2024 NameMyPet. All rights reserved.
            </Text>
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 20,
  },
  header: {
    marginBottom: 24,
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#EBF5FB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    shadowColor: "#3498DB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  logoEmoji: {
    fontSize: 40,
  },
  appName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  appVersion: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 4,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 22,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },
  featureText: {
    fontSize: 15,
    color: "#4B5563",
  },
  linkItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  linkText: {
    flex: 1,
    fontSize: 15,
    color: "#1A1A1A",
    marginLeft: 12,
  },
  linkArrow: {
    marginLeft: "auto",
  },
  adSection: {
    marginTop: 8,
    marginBottom: 24,
  },
  adSectionTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  // Estilos del banner publicitario
  adContainer: {
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    overflow: "hidden",
    minHeight: 100,
  },
  adContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  adBadge: {
    backgroundColor: "#6B7280",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  adBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
  },
  adTextContainer: {
    flex: 1,
  },
  adTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  adDescription: {
    fontSize: 12,
    color: "#6B6B6B",
    marginTop: 2,
  },
  adButton: {
    backgroundColor: "#3498DB",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  adButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  footerText: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 4,
  },
});

export default AboutScreen;
