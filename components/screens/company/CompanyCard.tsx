import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";

type CompanyCardProps = {
  item: {
    id: number;
    name: string;
    image: string;
  };
};

export default function CompanyCard({ item }: CompanyCardProps) {
  return (
    <Pressable className=" flex-auto px-2">
      <Card className="bg-white">
        <Avatar className="mr-4 w-[44px] h-[44px] mx-auto">
          <AvatarFallbackText>JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://gluestack.github.io/public-blog-video-assets/camera.png",
            }}
          />
        </Avatar>
        <Text className=" font-medium text-primary-main text-center mt-1 line-clamp-1">
          {item.name}
        </Text>
      </Card>
    </Pressable>
  );
}
