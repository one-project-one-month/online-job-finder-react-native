import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useFocusEffect } from "@react-navigation/native";
import { Bookmark, BookmarkCheck } from "lucide-react-native";
import { useCallback, useRef, useState } from "react";
import PagerView from "react-native-pager-view";

const popularJobs = [
  {
    title: "Junior Executive",
    company: "Shell plc",
    category: "Administration",
    type: "Full-Time",
    level: "Junior",
    salary: "$98,000/year",
    location: "Texas, USA",
    logo: "shell_logo.png",
    isBookmarked: false,
  },
  {
    title: "Software Engineer",
    company: "Google",
    category: "Engineering",
    type: "Full-Time",
    level: "Mid-Level",
    salary: "$120,000/year",
    location: "California, USA",
    logo: "google_logo.png",
    isBookmarked: true,
  },
  {
    title: "Marketing Specialist",
    company: "Meta",
    category: "Marketing",
    type: "Part-Time",
    level: "Senior",
    salary: "$80,000/year",
    location: "New York, USA",
    logo: "meta_logo.png",
    isBookmarked: false,
  },
  {
    title: "HR Manager",
    company: "Microsoft",
    category: "Human Resources",
    type: "Full-Time",
    level: "Senior",
    salary: "$110,000/year",
    location: "Washington, USA",
    logo: "microsoft_logo.png",
    isBookmarked: true,
  },
  {
    title: "Data Analyst",
    company: "Amazon",
    category: "Data Science",
    type: "Full-Time",
    level: "Mid-Level",
    salary: "$105,000/year",
    location: "Seattle, USA",
    logo: "amazon_logo.png",
    isBookmarked: false,
  },
];

export default function ViewPager() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pageRef = useRef<PagerView>(null);
  useFocusEffect(
    useCallback(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prev) => {
          const nextPage = (prev + 1) % popularJobs.length;
          pageRef.current?.setPage(nextPage);
          return nextPage;
        });
      }, 3000);

      return () => clearInterval(intervalId); // Cleanup when the screen loses focus
    }, [])
  );
  return (
    <Box className=" h-[200px] px-6">
      <PagerView
        ref={pageRef}
        style={{ height: 200 }}
        initialPage={activeIndex}
      >
        {popularJobs.map((job, idx) => (
          <Box key={idx}>
            <Card className="p-5 rounded-xl max-w-[360px] bg-primary-main">
              <VStack space="md">
                <HStack className=" justify-between">
                  <HStack space="lg" className=" items-center">
                    <Pressable>
                      <Avatar size="md">
                        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
                        <AvatarImage
                          source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                          }}
                          className=" w-[46px] h-[46px] rounded-xl"
                        />
                        {/* <AvatarBadge size="lg" className=" top-0 -right-2" /> */}
                      </Avatar>
                    </Pressable>
                    <VStack className=" pb-1">
                      <Text size="lg" className=" font-semibold text-white">
                        {job.title}
                      </Text>
                      <Text size="sm" className=" text-white">
                        {job.company}
                      </Text>
                    </VStack>
                  </HStack>
                  <Pressable className=" pt-1">
                    {job.isBookmarked ? (
                      <BookmarkCheck size={20} color="yellow" />
                    ) : (
                      <Bookmark size={20} color="white" />
                    )}
                  </Pressable>
                </HStack>
                <HStack space="md" className=" items-center">
                  <Badge
                    size="sm"
                    variant="solid"
                    action="info"
                    className=" rounded-full"
                  >
                    <BadgeText className=" font-semibold">
                      {job.category}
                    </BadgeText>
                  </Badge>
                  <Badge
                    size="sm"
                    variant="solid"
                    action="info"
                    className=" rounded-full"
                  >
                    <BadgeText className=" font-semibold">{job.type}</BadgeText>
                  </Badge>
                  <Badge
                    size="sm"
                    variant="solid"
                    action="info"
                    className=" rounded-full"
                  >
                    <BadgeText className=" font-semibold">
                      {job.level}
                    </BadgeText>
                  </Badge>
                </HStack>
                <HStack className=" justify-between items-center">
                  <Text size="sm" className=" text-white">
                    {job.salary}
                  </Text>
                  <Text size="sm" className=" text-white">
                    {job.location}
                  </Text>
                </HStack>
              </VStack>
            </Card>
          </Box>
        ))}
      </PagerView>
    </Box>
  );
}
