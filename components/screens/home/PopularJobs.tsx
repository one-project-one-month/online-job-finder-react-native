import React from "react";
import { Box } from "@/components/ui/box";
import { Pressable } from "@/components/ui/pressable";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { View } from "react-native";
import { Link } from "expo-router";
import { Bookmark } from "lucide-react-native";

export default function PopularJobs() {
  const fakeArr = Array.from({ length: 6 });
  return (
    <Box className=" flex flex-row flex-wrap justify-between px-6 gap-5">
      {fakeArr.map((_, idx) => (
        <View
          key={idx}
          style={{
            width: "100%",
            borderWidth: 0.1,
            padding: 8,
            borderEndEndRadius: 10,
            borderEndStartRadius: 10,
            borderLeftWidth: 4,
            borderLeftColor: "#356899",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Pressable>
            <HStack className=" justify-between">
              <HStack space="sm" className=" items-center">
                <Avatar size="md">
                  {/* <AvatarFallbackText>Jane Doe</AvatarFallbackText> */}
                  <AvatarImage
                    source={require("@/assets/images/react-logo.png")}
                  />
                  {/* <AvatarBadge size="lg" className=" top-0 -right-2" /> */}
                </Avatar>
                <Box>
                  <Text size="sm" className=" font-semibold">
                    Myanmar Tech
                  </Text>
                  <Text size="xs" className=" font-semibold text-gray-400">
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
              size="md"
              className=" font-semibold text-primary-main truncate"
            >
              Assistant HR & Admin Manager (Female-2)
            </Text>
          </Link>
          <HStack className=" justify-between mt-1">
            <Text size="sm" className=" text-gray-400">
              Full-Time
            </Text>
            <Text size="sm" className=" text-gray-400">
              Junior
            </Text>
          </HStack>
        </View>
      ))}
    </Box>
  );
}
