import React from "react";
import SafeView from "@/components/common/SafeView";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

import { companyLists } from "@/constants/user-data";
import { HStack } from "@/components/ui/hstack";
import { Building2 } from "lucide-react-native";
import { FlashList } from "@shopify/flash-list";
import CompanyCard from "@/components/screens/company/CompanyCard";
import { View } from "react-native";
import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";

export default function CompanyListScreen() {
  return (
    <SafeView>
      <VStack space="2xl" className=" py-6">
        <Pressable className=" px-6">
          <HStack space="md" className=" items-center justify-between">
            <Pressable>
              <ArrowLeftIcon />
            </Pressable>
            <Text
              size="xl"
              className=" font-semibold text-primary-main text-center"
            >
              Companies
            </Text>
            <Text></Text>
          </HStack>
        </Pressable>
        <Box className=" px-4">
          <FlashList
            data={companyLists}
            numColumns={2}
            renderItem={({ item }) => {
              return <CompanyCard item={item} />;
            }}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={200}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          />
        </Box>
      </VStack>
    </SafeView>
  );
}
