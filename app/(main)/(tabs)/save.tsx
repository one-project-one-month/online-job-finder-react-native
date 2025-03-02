import React from "react";
import SafeView from "@/components/common/SafeView";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import PopularJobs from "@/components/screens/home/PopularJobs";

export default function SaveScreen() {
  return (
    <SafeView>
      <VStack space="2xl" className=" py-6">
        <HStack className=" px-6 justify-center">
          <Text size="xl" className=" font-semibold text-primary-main">
            You saved 48 Jobs
          </Text>
        </HStack>
        <PopularJobs />
      </VStack>
    </SafeView>
  );
}
