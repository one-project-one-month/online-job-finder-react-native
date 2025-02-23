import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeView({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingVertical: 10,
  },
});
