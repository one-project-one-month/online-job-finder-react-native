import React from "react";
import SafeView from "@/components/common/SafeView";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import {
  BellRing,
  CircleHelp,
  CircleUserRound,
  Globe,
  HandHelping,
  HeartHandshake,
  ReceiptText,
  RectangleEllipsis,
  ShieldAlert,
  Trash2,
} from "lucide-react-native";
import LogoutSetting from "@/components/screens/setting/LogoutSetting";
import useRemoveTabBar from "@/hooks/useRemoveTabBar";
import { router } from "expo-router";

export default function SettingScreen() {
  useRemoveTabBar();
  return (
    <SafeView>
      <VStack className=" p-6 mb-8" space="4xl">
        <HStack className=" justify-between items-center">
          <Pressable onPress={() => router.push("/profile")}>
            <ArrowLeftIcon />
          </Pressable>
          <Text size="xl" className=" font-semibold">
            Settings
          </Text>
          <Text></Text>
        </HStack>
        <VStack space="2xl">
          <Text size="md" className=" text-gray-400 font-medium">
            Applications
          </Text>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <CircleUserRound strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Profile Visibility
              </Text>
            </HStack>
          </Pressable>

          <Pressable>
            <HStack space="lg" className=" items-center">
              <BellRing strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Notification
              </Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <RectangleEllipsis
                strokeWidth={1.75}
                size={22}
                color={"#9ca3af"}
              />
              <Text size="md" className=" font-medium">
                Change Password
              </Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <Globe strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Language
              </Text>
            </HStack>
          </Pressable>
        </VStack>
        <VStack space="2xl">
          <Text size="md" className=" text-gray-400 font-medium">
            Control
          </Text>
          <LogoutSetting />
          <Pressable>
            <HStack space="lg" className=" items-center">
              <Trash2 strokeWidth={1.75} size={22} color={"#ef4444"} />
              <Text size="md" className=" font-medium">
                Delete Account
              </Text>
            </HStack>
          </Pressable>
        </VStack>
        <VStack space="2xl">
          <Text size="md" className=" text-gray-400 font-medium">
            About
          </Text>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <ShieldAlert strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Privacy
              </Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <ReceiptText strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Terms and conditions
              </Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <HandHelping strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Help Center
              </Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <HeartHandshake strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                Support
              </Text>
            </HStack>
          </Pressable>
          <Pressable>
            <HStack space="lg" className=" items-center">
              <CircleHelp strokeWidth={1.75} size={22} color={"#9ca3af"} />
              <Text size="md" className=" font-medium">
                About
              </Text>
            </HStack>
          </Pressable>
        </VStack>
      </VStack>
    </SafeView>
  );
}
