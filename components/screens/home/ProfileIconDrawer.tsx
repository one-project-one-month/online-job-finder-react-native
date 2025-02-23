import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import {
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  FileUser,
  Info,
  NotepadText,
  Settings,
  StickyNote,
} from "lucide-react-native";
import React from "react";

export function ProfileIconDrawer() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const navigateTo = (path: any) => {
    setShowDrawer(false);
    router.push(path);
  };
  return (
    <>
      <Pressable onPress={() => setShowDrawer(true)}>
        <Avatar size="md">
          <AvatarFallbackText>Jane Doe</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            className=" w-[50px] h-[50px]"
          />
          <AvatarBadge size="lg" className=" top-0 -right-2" />
        </Avatar>
      </Pressable>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size="lg"
        anchor="left"
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader className=" mt-10">
            <Pressable
              className=" w-full"
              onPress={() => navigateTo("/profile")}
            >
              <VStack
                space="xs"
                className=" w-full justify-center items-center"
              >
                <Avatar size="xl" className=" mx-auto">
                  <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    }}
                    className=""
                  />
                  <AvatarBadge className=" top-0 -right-2" />
                </Avatar>
                <Text size="lg" className=" font-semibold text-center">
                  Htet Myat
                </Text>
                <HStack space="md" className=" justify-center items-center">
                  <Text className=" pb-1 text-gray-400">
                    Frontend Developer
                  </Text>
                  <BadgeCheck size={16} color={"#2C557D"} />
                </HStack>
                <Text className=" text-center font-medium text-primary-main">
                  View Profile
                </Text>
              </VStack>
            </Pressable>
          </DrawerHeader>
          <DrawerBody>
            <VStack space="3xl" className=" mt-10">
              <HStack space="lg" className=" items-center">
                <Info strokeWidth={1.75} size={22} color={"#9ca3af"} />
                <Text className=" font-medium">Personal Info</Text>
              </HStack>
              <HStack space="lg" className=" items-center">
                <NotepadText strokeWidth={1.75} size={22} color={"#9ca3af"} />
                <Text className=" font-medium">Applications</Text>
              </HStack>
              <HStack space="lg" className=" items-center">
                <StickyNote strokeWidth={1.75} size={22} color={"#9ca3af"} />
                <Text className=" font-medium">Proposals</Text>
              </HStack>
              <HStack space="lg" className=" items-center">
                <FileUser strokeWidth={1.75} size={22} color={"#9ca3af"} />
                <Text className=" font-medium">Resumes</Text>
              </HStack>
              <HStack space="lg" className=" items-center">
                <BriefcaseBusiness
                  strokeWidth={1.75}
                  size={22}
                  color={"#9ca3af"}
                />
                <Text className=" font-medium">Portfolio</Text>
              </HStack>
              <HStack space="lg" className=" items-center">
                <FileText strokeWidth={1.75} size={22} color={"#9ca3af"} />
                <Text className=" font-medium">Cover Letters</Text>
              </HStack>
              <Pressable onPress={() => navigateTo("/setting")}>
                <HStack space="lg" className=" items-center">
                  <Settings strokeWidth={1.75} size={22} color={"#9ca3af"} />
                  <Text className=" font-medium">Settings</Text>
                </HStack>
              </Pressable>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant={"solid"}
              size={"lg"}
              className=" w-full h-14 bg-[#356899] rounded-[10px] hover:bg-[#05405d] active:bg-[#05405d] focus:bg-[#05405d]"
            >
              <ButtonText className=" font-normal">Go Premium</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
