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
import { Input, InputField } from "@/components/ui/input";

export default function SearchScreen() {
  useRemoveTabBar();
  return (
    <SafeView>
      <VStack space="lg" className=" p-6">
        <HStack className=" justify-between">
          <Pressable onPress={() => router.back()}>
            <ArrowLeftIcon />
          </Pressable>
          <Text size="lg" className=" font-semibold">
            Search
          </Text>
          <Text></Text>
        </HStack>
        <Box>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            className=" h-14 rounded-[10px]"
          >
            <InputField placeholder="Search here..." />
          </Input>
        </Box>
      </VStack>
    </SafeView>
  );
}
