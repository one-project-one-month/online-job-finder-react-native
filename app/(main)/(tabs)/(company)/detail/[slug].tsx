import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useRemoveTabBar from "@/hooks/useRemoveTabBar";

export default function CompanyDetailScreen() {
  const { slug } = useLocalSearchParams();
  useRemoveTabBar();
  return (
    <View>
      <Text>Company Detail {slug}</Text>
    </View>
  );
}
