import { StyleSheet } from "react-native";
import React from "react";
import SafeView from "@/components/common/SafeView";
import { router } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import SectionTitle from "@/components/common/SectionTitle";
import { Search } from "lucide-react-native";
import ViewPager from "@/components/screens/home/ViewPager";
import { ProfileIconDrawer } from "@/components/screens/home/ProfileIconDrawer";
import PopularJobs from "@/components/screens/home/PopularJobs";

export default function HomePage() {
  // useEffect(() => {
  //   setStatusBarStyle("dark");
  // }, []);
  return (
    <SafeView>
      <VStack space="3xl">
        <HStack className="px-6 pt-6 justify-between items-center">
          <VStack>
            <Text>Welcome Back!</Text>
            <Text size="xl" className=" text-primary-main" bold>
              Htet Myat 👋
            </Text>
          </VStack>
          <ProfileIconDrawer />
        </HStack>
        <HStack className="px-6" space="md">
          <Pressable className=" w-full" onPress={() => router.push("/search")}>
            <HStack
              space="sm"
              className=" h-[50px] items-center bg-gray-100 rounded-[10px] px-3"
            >
              <Search size={20} color="#9ca3af" />
              <Text className=" text-gray-500">
                Search a job or position ...
              </Text>
            </HStack>
          </Pressable>
        </HStack>
        <VStack space="md">
          <SectionTitle title="Latest Jobs" actionText="See All" />
          <ViewPager />
        </VStack>
        <VStack space="md">
          <SectionTitle title="Popular Jobs" actionText="See All" />
          <PopularJobs />
        </VStack>
        <VStack space="md">
          <SectionTitle title="Recommended Jobs" actionText="See All" />
          <PopularJobs />
        </VStack>
      </VStack>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
