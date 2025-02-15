import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeView from "@/components/common/SafeView";
import { StatusBar } from "expo-status-bar";

export default function SaveScreen() {
  return (
    <SafeView>
      <StatusBar style="dark" />
      <View>
        <Text>SaveScreen</Text>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({});
