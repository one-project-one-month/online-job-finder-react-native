import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeIconSvg from "@/assets/images/icons/HomeIconSvg";
import SaveIconSvg from "@/assets/images/icons/SaveIconSvg";
import CategoryIconSvg from "@/assets/images/icons/CategoryIconSvg";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const showHiddenTab = false;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            height: 60,
            paddingTop: 15,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size, color }) => (
            <HomeIconSvg focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          tabBarIcon: ({ focused, size, color }) => (
            <SaveIconSvg focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(company)/company-list-screen"
        options={{
          title: "Company List",
          tabBarIcon: ({ focused, size, color }) => (
            <CategoryIconSvg focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(setting)/setting"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
