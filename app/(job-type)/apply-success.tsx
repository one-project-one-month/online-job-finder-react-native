import React from "react";
import SafeView from "@/components/common/SafeView";
import { VStack } from "@/components/ui/vstack";
import ExpoImage from "@/components/common/ExpoImage";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";

export default function ApplySuccessScreen() {
  return (
    <SafeView>
      <Box className="w-full h-[100vh] items-center justify-center">
        <VStack space="3xl" className=" px-6">
          <VStack space="md">
            <ExpoImage
              source={require("@/assets/images/img/check.png")}
              style={{ width: 50, height: 50, margin: "auto" }}
            />
            <Text
              size="xl"
              className=" font-semibold text-primary-main text-center"
            >
              Job Successfully Applied
            </Text>
            <Text className=" text-gray-400 text-center">
              We'll inform you about the next information. Please sit tight.
            </Text>
          </VStack>
          <Button
            variant={"solid"}
            size={"lg"}
            onPress={() => router.push("/")}
            className=" h-14 bg-[#356899] rounded-[10px] hover:bg-[#05405d] active:bg-[#05405d] focus:bg-[#05405d]"
          >
            <ButtonText className=" font-normal">Go to Home</ButtonText>
          </Button>
        </VStack>
      </Box>
    </SafeView>
  );
}
