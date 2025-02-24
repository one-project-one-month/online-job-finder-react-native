import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { useLogoutState } from "@/store/useLogoutState";
import { LogOut } from "lucide-react-native";
import React from "react";

export default function LogoutSetting() {
  const { setIsLogout } = useLogoutState();
  return (
    <>
      <Pressable onPress={() => setIsLogout(true)}>
        <HStack space="lg" className=" items-center">
          <LogOut strokeWidth={1.75} size={22} color={"#9ca3af"} />
          <Text size="md" className=" font-medium">
            Logout
          </Text>
        </HStack>
      </Pressable>
    </>
  );
}
