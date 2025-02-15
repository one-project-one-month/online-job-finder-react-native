import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SafeView from "@/components/common/SafeView";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function HomePage() {
  useEffect(() => {
    setStatusBarStyle("dark");
  }, [router]);
  return (
    <SafeView>
      <StatusBar style="dark" />
      <View>
        <Text>Home</Text>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
