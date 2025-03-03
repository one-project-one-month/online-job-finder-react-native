import React from "react";
import { Box } from "@/components/ui/box";
import { FlashList } from "@shopify/flash-list";
import JobCard from "./JobCard";

export default function PopularJobs() {
  const fakeArr = Array.from({ length: 3 });
  return (
    <Box className="px-6">
      <FlashList
        data={fakeArr}
        renderItem={() => <JobCard idx={1} />}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={300}
        ItemSeparatorComponent={() => <Box className=" h-4" />}
      />
    </Box>
  );
}
