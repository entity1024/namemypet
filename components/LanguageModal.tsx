import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "@/i18n/context";
import { useThemeColor } from "@/hooks/use-theme-color";

type Language = "en" | "es";

interface LanguageModalProps {
  visible: boolean;
  onClose: () => void;
}

const FLAGS: Record<Language, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
};

export default function LanguageModal({
  visible,
  onClose,
}: LanguageModalProps) {
  const { t, language, setLanguage } = useTranslation();
  const bgColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const cardBg = useThemeColor({}, "cardBackground");
  const primary = useThemeColor({}, "primary");
  const border = useThemeColor({}, "border");
  const subtitleColor = useThemeColor({}, "subtitle");

  const languages: { id: Language; label: string }[] = [
    { id: "en", label: t("language.english") },
    { id: "es", label: t("language.spanish") },
  ];

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          style={[styles.modal, { backgroundColor: cardBg, borderColor: border }]}
          onPress={() => {}}
        >
          <Text style={[styles.title, { color: textColor }]}>
            {t("language.title")}
          </Text>

          {languages.map((lang) => {
            const isSelected = language === lang.id;
            return (
              <Pressable
                key={lang.id}
                style={[
                  styles.option,
                  isSelected && {
                    backgroundColor: primary + "15",
                    borderColor: primary,
                  },
                  !isSelected && { borderColor: border },
                ]}
                onPress={() => handleSelect(lang.id)}
              >
                <Text style={styles.flag}>{FLAGS[lang.id]}</Text>
                <Text
                  style={[
                    styles.optionText,
                    { color: isSelected ? primary : textColor },
                    isSelected && styles.optionTextSelected,
                  ]}
                >
                  {lang.label}
                </Text>
                {isSelected && <Text style={[styles.check, { color: primary }]}>✓</Text>}
              </Pressable>
            );
          })}

          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={[styles.cancelText, { color: subtitleColor }]}>
              Cancel
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    maxWidth: 320,
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    marginBottom: 10,
  },
  flag: {
    fontSize: 28,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  optionTextSelected: {
    fontWeight: "700",
  },
  check: {
    fontSize: 18,
    fontWeight: "700",
  },
  cancelButton: {
    marginTop: 8,
    paddingVertical: 10,
  },
  cancelText: {
    fontSize: 14,
  },
});
