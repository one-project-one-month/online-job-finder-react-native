import React from "react";
import SafeView from "@/components/common/SafeView";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import ConfirmResetSvg from "@/assets/images/icons/ConfirmResetSvg";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { Box } from "@/components/ui/box";

export default function ConfirmReset() {
  const handleSignIn = async () => {
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace("/sign-in");
  };
  return (
    <SafeView>
      <VStack>
        <VStack space="4xl" className="p-6">
          <Text
            size="2xl"
            className=" text-primary-main font-semibold text-center"
          >
            Jôbizz
          </Text>
          <VStack space="lg" className=" py-10">
            <Box className=" items-center">
              <ConfirmResetSvg />
            </Box>
            <Text size="lg" className=" font-semibold text-center">
              Confirmation
            </Text>
            <Text size="md" className=" text-gray-500 text-center">
              Your password has been changed. Please log in with your new
              password.
            </Text>
          </VStack>
          <Button
            variant={"solid"}
            size={"lg"}
            onPress={handleSignIn}
            className=" h-14 bg-[#356899] rounded-[10px] hover:bg-[#05405d] active:bg-[#05405d] focus:bg-[#05405d]"
          >
            <ButtonText className=" font-normal">Login</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </SafeView>
  );
}
