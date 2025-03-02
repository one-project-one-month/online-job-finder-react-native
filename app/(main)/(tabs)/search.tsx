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
import JobFilterIconSvg from "@/assets/images/icons/JobFilterIconSvg";

export default function SearchScreen() {
  useRemoveTabBar();
  return (
    <SafeView>
      <VStack space="lg" className=" ">
        <HStack className=" justify-between p-6">
          <Pressable onPress={() => router.back()}>
            <ArrowLeftIcon />
          </Pressable>
          <Text size="xl" className=" font-semibold text-primary-main">
            Search
          </Text>
          <Text></Text>
        </HStack>
        <VStack space="2xl">
          <Box className=" px-6 flex flex-row gap-2">
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              className=" flex-1  h-14 rounded-[10px]"
            >
              <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField placeholder="Search here..." returnKeyType="search" />
            </Input>
            <Pressable className="w-14 h-14 rounded-[10px] border border-gray-200 items-center justify-center">
              <JobFilterIconSvg />
            </Pressable>
          </Box>
          <VStack space="lg" className=" px-6">
            <Text size="lg" className=" font-semibold">
              Recent Search
            </Text>
            <VStack space="xl" className="">
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
