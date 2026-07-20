import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "@/i18n/context";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function AboutScreen() {
  const { t } = useTranslation();
  const bgColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const subtitleColor = useThemeColor({}, "subtitle");
  const border = useThemeColor({}, "border");

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" backgroundColor={bgColor} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoEmoji}>🐾</Text>
          <Text style={[styles.appName, { color: textColor }]}>NameMyPet</Text>
          <Text style={[styles.version, { color: subtitleColor }]}>
            {t("about.version", { version: "1.0.0" })}
          </Text>
        </View>

        <Text style={[styles.description, { color: subtitleColor }]}>
          {t("about.description")}
        </Text>

        <View style={[styles.divider, { backgroundColor: border }]} />

        {/* AdMob Banner placeholder */}
        <View style={styles.adContainer}>
          <Text style={[styles.adPlaceholder, { color: subtitleColor }]}>
            {t("about.adPlaceholder")}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollView: { flex: 1 },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },
  logoContainer: { alignItems: "center", marginBottom: 24 },
  logoEmoji: { fontSize: 64, marginBottom: 12 },
  appName: { fontSize: 24, fontWeight: "700", marginBottom: 4 },
  version: { fontSize: 14 },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  divider: { height: 1, width: "80%", marginBottom: 24 },
  adContainer: {
    width: "100%",
    maxWidth: 320,
    height: 120,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#9CA3AF",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  adPlaceholder: { fontSize: 14, fontWeight: "500" },
});
