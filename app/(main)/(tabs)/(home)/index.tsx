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
import { SlidersHorizontal } from "lucide-react-native";
import ViewPager from "@/components/screens/home/ViewPager";

export default function HomePage() {
  useEffect(() => {
    setStatusBarStyle("dark");
  }, [router]);
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
          <Pressable onPress={() => router.push("/profile")}>
            <Avatar size="md">
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                className=" w-[50px] h-[50px]"
              />
              <AvatarBadge size="lg" className=" top-0 -right-2" />
            </Avatar>
          </Pressable>
        </HStack>
        <HStack className="px-6" space="md">
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isFocused={false}
            className=" h-[40px] bg-[#F2F2F3] rounded-xl flex-auto"
          >
            <InputSlot className="pl-3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField placeholder="Enter Text here..." />
          </Input>
          <Button
            size="lg"
            className="rounded-xl h-[40px] bg-[#F2F2F3] border border-gray-300"
          >
            <ButtonIcon as={SlidersHorizontal} style={{ color: "#222" }} />
          </Button>
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
