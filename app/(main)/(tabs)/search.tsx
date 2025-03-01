import React from "react";
import SafeView from "@/components/common/SafeView";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { router } from "expo-router";
import useRemoveTabBar from "@/hooks/useRemoveTabBar";
import { Box } from "@/components/ui/box";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { CloseIcon, SearchIcon } from "@/components/ui/icon";
import { X } from "lucide-react-native";
import SectionTitle from "@/components/common/SectionTitle";
import PopularJobs from "@/components/screens/home/PopularJobs";

export default function SearchScreen() {
  useRemoveTabBar();
  return (
    <SafeView>
      <VStack space="lg" className=" ">
        <HStack className=" justify-between p-6">
          <Pressable onPress={() => router.back()}>
            <ArrowLeftIcon />
          </Pressable>
          <Text size="lg" className=" font-semibold">
            Search
          </Text>
          <Text></Text>
        </HStack>
        <VStack space="lg">
          <Box className=" px-6">
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              className=" h-14 rounded-[10px]"
            >
              <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField placeholder="Search here..." returnKeyType="search" />
            </Input>
          </Box>
          <VStack space="md" className=" px-6">
            <Text className=" font-semibold">Recent Search</Text>
            <VStack space="md" className="">
              <HStack className=" justify-between items-center">
                <Pressable>
                  <Text className=" text-gray-400">React Developer</Text>
                </Pressable>
                <Pressable>
                  <X size={18} color="#9ca3af" />
                </Pressable>
              </HStack>
              <HStack className=" justify-between items-center">
                <Pressable>
                  <Text className=" text-gray-400">Backend Developer</Text>
                </Pressable>
                <Pressable>
                  <X size={18} color="#9ca3af" />
                </Pressable>
              </HStack>
              <HStack className=" justify-between items-center">
                <Pressable>
                  <Text className=" text-gray-400">Junior Designer</Text>
                </Pressable>
                <Pressable>
                  <X size={18} color="#9ca3af" />
                </Pressable>
              </HStack>
            </VStack>
          </VStack>
          <VStack space="md">
            <SectionTitle title="Recent View" actionText="See All" />
            <PopularJobs />
          </VStack>
        </VStack>
      </VStack>
    </SafeView>
  );
}
