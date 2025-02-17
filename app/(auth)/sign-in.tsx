import React from "react";
import { Button, ButtonText } from "@/components/ui/button";

import SafeView from "@/components/common/SafeView";
import { useSession } from "@/provider/ctx";
import useOnboardState from "@/store/useOnboardState";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import { HStack } from "@/components/ui/hstack";
export default function SignIn() {
  const { isOnboarded } = useOnboardState();
  const { signIn, session } = useSession();
  const handleSignIn = () => {
    signIn();
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace("/");
  };
  if (!isOnboarded) {
    return <Redirect href="/on-boarding" />;
  }
  if (session) {
    return <Redirect href="/" />;
  }
  return (
    <SafeView>
      <StatusBar style="dark" />
      <VStack className=" p-6" space="3xl">
        <VStack space="md">
          <ArrowLeftIcon />
          <Text size="2xl" className=" text-[#356899] font-semibold">
            Jôbizz
          </Text>
          <Text size="3xl" className=" font-semibold">
            Registration 👍
          </Text>
          <Text className=" text-[#0D0D26] opacity-40">
            Let’s Register. Apply to jobs!
          </Text>
        </VStack>
        <VStack>
          <Button
            variant={"solid"}
            size={"lg"}
            onPress={handleSignIn}
            className=" h-14 bg-[#356899] rounded-[10px] hover:bg-[#05405d] active:bg-[#05405d] focus:bg-[#05405d]"
          >
            <ButtonText className=" font-normal">Register</ButtonText>
          </Button>
        </VStack>
        <HStack space="sm" className=" justify-center">
          <Text className=" text-[#0D0D26] opacity-40">Have an account ?</Text>
          <Text className=" text-[#356899] font-semibold">Log in</Text>
        </HStack>
      </VStack>
    </SafeView>
  );
}
