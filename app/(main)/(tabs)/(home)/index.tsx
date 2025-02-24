import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import SafeView from "@/components/common/SafeView";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Pressable } from "@/components/ui/pressable";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/icon";
import { Button, ButtonIcon } from "@/components/ui/button";
import SectionTitle from "@/components/common/SectionTitle";
import { Search, SlidersHorizontal } from "lucide-react-native";
import ViewPager from "@/components/screens/home/ViewPager";
import { ProfileIconDrawer } from "@/components/screens/home/ProfileIconDrawer";

export default function HomePage() {
  useEffect(() => {
    setStatusBarStyle("dark");
  }, []);
  return (
    <SafeView>
      <VStack space="3xl">
        <HStack className="px-6 pt-6 justify-between items-center">
          <VStack>
            <Text>Welcome Back!</Text>
            <Text size="xl" bold>
              Htet Myat 👋
            </Text>
          </VStack>
          <ProfileIconDrawer />
        </HStack>
        <HStack className="px-6" space="md">
          <Pressable className=" w-full" onPress={() => router.push("/search")}>
            <HStack
              space="sm"
              className=" h-[50px] items-center bg-gray-100 rounded-[10px] px-3"
            >
              <Search size={20} color="#9ca3af" />
              <Text className=" text-gray-500">
                Search a job or position ...
              </Text>
            </HStack>
          </Pressable>
        </HStack>
        <VStack space="md">
          <SectionTitle title="Popular" actionText="See All" />
          <ViewPager />
        </VStack>
      </VStack>
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
