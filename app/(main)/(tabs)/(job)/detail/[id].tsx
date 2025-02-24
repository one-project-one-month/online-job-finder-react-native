import ArrowLeftIcon from "@/assets/images/icons/BackIconSvg";
import BookmarkAddIcon from "@/assets/images/icons/BookMarkSvg";
import ExpoImage from "@/components/common/ExpoImage";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import useRemoveTabBar from "@/hooks/useRemoveTabBar";
import { ImageBackground } from "expo-image";
import { router, useFocusEffect } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();
  useRemoveTabBar();
  useFocusEffect(() => {
    setStatusBarStyle("light");
    return () => {
      setStatusBarStyle("dark");
    };
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width,
          height: height,
        }}
      >
        <Box className=" bg-primary-main h-[300px] w-full">
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              paddingHorizontal: 24,
              paddingTop: 50,
            }}
            source={require("@/assets/images/img/detail.png")}
          >
            <HStack className=" justify-between">
              <Pressable onPress={() => router.back()}>
                <ArrowLeftIcon color={"#fff"} width={29} height={29} />
              </Pressable>
              <BookmarkAddIcon color={"#fff"} width={26} height={26} />
            </HStack>
            <VStack space="xl">
              <VStack space="sm">
                <Box className=" w-[80px] h-[80px] mx-auto rounded-full -mt-[25px]">
                  <ExpoImage
                    source={require("@/assets/images/react-logo.png")}
                    style={{ width: 80, height: 80, borderRadius: 30 }}
                  />
                </Box>
                <Text size="xl" className=" text-center text-white font-bold">
                  React Native Developer
                </Text>
                <Text className=" text-center text-gray-300 font-medium">
                  Tech Myanmar
                </Text>
              </VStack>
              <HStack className=" justify-between items-center">
                <Badge
                  size="sm"
                  variant="solid"
                  className=" bg-[#fff] rounded-full"
                >
                  <BadgeText className=" font-semibold">Frontend</BadgeText>
                </Badge>
                <Badge
                  size="sm"
                  variant="solid"
                  className=" bg-[#fff] rounded-full"
                >
                  <BadgeText className=" font-semibold">Full-Time</BadgeText>
                </Badge>
                <Badge
                  size="sm"
                  variant="solid"
                  className=" bg-[#fff] rounded-full"
                >
                  <BadgeText className=" font-semibold">Junior</BadgeText>
                </Badge>
              </HStack>
              <HStack className=" justify-between items-center">
                <Text className=" font-semibold text-white">MMK 400000</Text>
                <Text className=" font-semibold text-white">
                  Yangon / Hlaing
                </Text>
              </HStack>
            </VStack>
          </ImageBackground>
        </Box>
        <Box className=" px-6 py-10 mb-[110px]">
          <HStack className=" justify-between items-center mb-6">
            <Text className=" font-semibold text-primary-main">
              Description
            </Text>
            <Text className=" font-semibold text-gray-500">Requirement</Text>
            <Text className=" font-semibold text-gray-500">About</Text>
          </HStack>
          <Text className=" text-gray-500">
            About Us: [Company Name] is a fast-growing tech company specializing
            in [industry/sector, e.g., mobile app development, SaaS, e-commerce,
            etc.]. We are passionate about creating innovative, user-friendly
            mobile applications that solve real-world problems. Our team is
            collaborative, creative, and dedicated to delivering high-quality
            products. We are looking for a motivated Junior React Native
            Developer to join our team and help us build cutting-edge mobile
            applications. Job Description: As a Junior React Native Developer,
            you will work closely with our development team to design, develop,
            and maintain mobile applications for both iOS and Android platforms.
            You will be responsible for writing clean, efficient code and
            contributing to the overall success of our projects. This is an
            excellent opportunity for someone who is eager to learn, grow, and
            gain hands-on experience in mobile app development.
          </Text>
        </Box>
      </ScrollView>
      <Box className=" px-6 py-3 absolute bottom-0 left-0 w-full bg-gray-100">
        <Button
          variant={"solid"}
          size={"lg"}
          className=" h-14 bg-[#356899] rounded-[10px] hover:bg-[#05405d] active:bg-[#05405d] focus:bg-[#05405d]"
        >
          <ButtonText className=" font-normal">Apply Now</ButtonText>
        </Button>
      </Box>
    </SafeAreaView>
  );
}
