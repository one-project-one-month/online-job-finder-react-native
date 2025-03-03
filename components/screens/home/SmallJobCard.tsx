import { View } from "react-native";
import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Bookmark } from "lucide-react-native";
import { Link } from "expo-router";
import { Card } from "@/components/ui/card";

export default function SmallJobCard({ idx }: { idx: number }) {
  return (
    <Box className="">
      <Card className=" w-full border border-gray-200 bg-[#FEFEFF]">
        <Pressable>
          <HStack className=" justify-between">
            <HStack space="sm" className=" items-center">
              <Avatar size="sm" className=" bg-white">
                {/* <AvatarFallbackText>Jane Doe</AvatarFallbackText> */}
                <AvatarImage
                  source={require("@/assets/images/img/google.png")}
                />
                {/* <AvatarBadge size="lg" className=" top-0 -right-2" /> */}
              </Avatar>
              <Box>
                <Text size="sm" className=" flex-1 font-medium line-clamp-1">
                  Myanmar Technology
                </Text>
                <Text size="xs" className=" text-gray-400">
                  2 days ago
                </Text>
              </Box>
            </HStack>
            <Pressable className=" pt-1">
              <Bookmark size={20} color="#2C557D" />
            </Pressable>
          </HStack>
        </Pressable>
        <Link
          href={{
            pathname: "/detail/[id]",
            params: { id: idx },
          }}
          className=" mt-1"
        >
          <Text
            // size="sm"
            className=" font-semibold text-primary-main line-clamp-2"
          >
            Frontend Developer (male-3)
          </Text>
        </Link>
        <HStack className=" justify-between mt-1">
          <Text size="xs" className=" text-gray-400">
            Full-Time
          </Text>
          <Text size="xs" className=" text-gray-400">
            Junior
          </Text>
        </HStack>
      </Card>
    </Box>
  );
}
