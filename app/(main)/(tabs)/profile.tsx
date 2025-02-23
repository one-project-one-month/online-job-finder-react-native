import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import SafeView from "@/components/common/SafeView";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { BadgeCheck, Settings } from "lucide-react-native";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import { Pressable } from "@/components/ui/pressable";
import SectionTitle from "@/components/common/SectionTitle";
import { router } from "expo-router";
import { useNavigation } from "expo-router";
import useRemoveTabBar from "@/hooks/useRemoveTabBar";

export default function ProfilePage() {
  const navigation = useNavigation();
  useRemoveTabBar();

  return (
    <SafeView>
      <ScrollView style={{ paddingVertical: 24 }}>
        <VStack space="2xl" className="">
          <VStack space="xl" className=" px-6">
            <VStack space="xs">
              <HStack className=" justify-between items-center">
                <ArrowLeftIcon onPress={() => router.back()} />
                <HStack space="xl" className=" items-center">
                  <Pressable>
                    <Text>Edit Profile</Text>
                  </Pressable>
                  <Pressable onPress={() => router.push("/setting")}>
                    <Settings size={22} color={"#2C557D"} />
                  </Pressable>
                </HStack>
              </HStack>
              <Avatar size="xl" className=" mx-auto">
                <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                  className=""
                />
                <AvatarBadge className=" top-0 -right-2" />
              </Avatar>
              <Text size="xl" className=" font-semibold text-center">
                Htet Myat
              </Text>
              <HStack space="md" className=" justify-center items-center">
                <Text className=" pb-1 text-gray-400">Frontend Developer</Text>
                <BadgeCheck size={16} color={"#2C557D"} />
              </HStack>
            </VStack>
            <HStack className=" px-8 justify-between">
              <Box>
                <Text size="md" className=" font-semibold text-center">
                  27
                </Text>
                <Text size="sm" className=" text-gray-400">
                  Applied
                </Text>
              </Box>
              <Box>
                <Text size="md" className=" font-semibold text-center">
                  19
                </Text>
                <Text size="sm" className=" text-gray-400">
                  Reviewed
                </Text>
              </Box>
              <Box>
                <Text size="md" className=" font-semibold text-center">
                  14
                </Text>
                <Text size="sm" className=" text-gray-400">
                  Interview
                </Text>
              </Box>
            </HStack>
          </VStack>
          <VStack space="md">
            <SectionTitle title="Experience" actionText="See All" />
            <VStack space="xs" className="px-6">
              <Box
                style={{ borderWidth: 1, borderColor: "#ddd" }}
                className="  rounded-[10px] p-3 "
              >
                <HStack className=" justify-between">
                  <Text className=" font-semibold">Mid Level Developer</Text>
                  <Text size="sm" className=" font-semibold">
                    Yangon, Dagon
                  </Text>
                </HStack>
                <HStack className=" justify-between">
                  <Text size="sm" className=" text-gray-400">
                    Myanmar Tech
                  </Text>
                  <Text size="sm" className=" text-gray-400">
                    2024 - Present
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </VStack>
          <VStack space="md">
            <SectionTitle title="Education" actionText="See All" />
            <VStack space="xs" className="px-6">
              <Box
                style={{ borderWidth: 1, borderColor: "#ddd" }}
                className="  rounded-[10px] p-3 "
              >
                <HStack className=" justify-between">
                  <Text className=" font-semibold">Computer Science</Text>
                  <Text size="sm" className=" font-semibold">
                    Yangon, Hlaing
                  </Text>
                </HStack>
                <HStack className=" justify-between">
                  <Text size="sm" className=" text-gray-400">
                    Degree
                  </Text>
                  <Text size="sm" className=" text-gray-400">
                    2018 - 2022
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </VStack>
          <VStack space="md">
            <SectionTitle title="Resume" actionText="Make a resume" />
            {/* <VStack space="xs" className="px-6">
              <Box
                style={{ borderWidth: 1, borderColor: "#ddd" }}
                className="  rounded-[10px] p-3 "
              >
                <HStack className=" justify-between">
                  <Text className=" font-semibold">Computer Science</Text>
                  <Text size="sm" className=" font-semibold">
                    Yangon, Hlaing
                  </Text>
                </HStack>
                <HStack className=" justify-between">
                  <Text size="sm" className=" text-gray-400">
                    Degree
                  </Text>
                  <Text size="sm" className=" text-gray-400">
                    2018 - 2022
                  </Text>
                </HStack>
              </Box>
            </VStack> */}
          </VStack>
        </VStack>
      </ScrollView>
    </SafeView>
  );
}

const styles = StyleSheet.create({});
