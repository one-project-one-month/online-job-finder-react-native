import { ChevronRight } from "lucide-react-native";
import { HStack } from "../ui/hstack";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";

type SectionTitleProps = {
  title: string;
  actionText: string;
  onPress?: () => void;
};

export default function SectionTitle({
  title,
  actionText,
  onPress,
}: SectionTitleProps) {
  return (
    <HStack className=" px-6 justify-between items-center">
      <Text size="lg" className=" font-semibold">
        {title}
      </Text>
      <Pressable className="">
        <Text className=" text-[#95969D] flex-row items-center gap-2">
          {actionText}
          <ChevronRight size={16} color="#95969D" />
        </Text>{" "}
      </Pressable>
    </HStack>
  );
}
