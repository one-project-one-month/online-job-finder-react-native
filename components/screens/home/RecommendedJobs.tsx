import { Box } from "@/components/ui/box";
import { FlashList } from "@shopify/flash-list";
import SmallJobCard from "./SmallJobCard";

export default function RecommendedJobs() {
  const fakeArr = Array.from({ length: 8 });
  return (
    <Box className="px-6">
      <FlashList
        data={fakeArr}
        renderItem={() => <SmallJobCard idx={1} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={300}
        ItemSeparatorComponent={() => <Box className=" h-4" />}
      />
    </Box>
  );
}
