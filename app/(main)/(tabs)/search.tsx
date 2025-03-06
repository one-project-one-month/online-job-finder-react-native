import React, { useState } from "react";
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
import { SearchIcon } from "@/components/ui/icon";
import { ArrowDownUp, X } from "lucide-react-native";
import SectionTitle from "@/components/common/SectionTitle";
import JobFilterIconSvg from "@/assets/images/icons/JobFilterIconSvg";
import RecommendedJobs from "@/components/screens/home/RecommendedJobs";
import FilterJobs from "@/components/screens/search/FilterJobs";
import JobResultsFilter from "@/components/screens/search/JobResultsFilter";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  useRemoveTabBar();
  return (
    <SafeView>
      <VStack space="lg" className=" ">
        <HStack className=" justify-between p-6">
          <Pressable onPress={() => router.back()}>
            <ArrowLeftIcon />
          </Pressable>
          <Text size="xl" className=" font-semibold text-primary-main">
            Search Job
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
              className=" flex-1  h-14 rounded-[10px] bg-white"
            >
              <InputSlot className="pl-3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search here..."
                returnKeyType="search"
              />
            </Input>
            <FilterJobs />
          </Box>
          {searchText.length > 0 ? (
            <VStack space="lg">
              <HStack className=" px-6 justify-between items-center">
                <Text className=" font-medium">14 results matching</Text>
                <JobResultsFilter />
              </HStack>
              <RecommendedJobs />
            </VStack>
          ) : (
            <>
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
                <RecommendedJobs />
              </VStack>
            </>
          )}
        </VStack>
      </VStack>
    </SafeView>
  );
}
