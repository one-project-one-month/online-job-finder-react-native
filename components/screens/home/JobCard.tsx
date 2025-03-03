import { View } from "react-native";
import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Bookmark } from "lucide-react-native";
import { Link } from "expo-router";

export default function JobCard({ idx }: { idx: number }) {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 0.1,
        padding: 8,
        borderEndEndRadius: 10,
        borderEndStartRadius: 10,
        borderLeftWidth: 4,
        borderLeftColor: "#5C93C7",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        backgroundColor: "#fff",
      }}
    >
      <Pressable>
        <HStack className=" justify-between">
          <HStack space="sm" className=" items-center">
            <Avatar size="sm">
              {/* <AvatarFallbackText>Jane Doe</AvatarFallbackText> */}
              <AvatarImage source={require("@/assets/images/react-logo.png")} />
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
        <Text size="md" className=" font-semibold text-primary-main truncate">
          Assistant HR & Admin Manager (Female-2)
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
    </View>
  );
}
