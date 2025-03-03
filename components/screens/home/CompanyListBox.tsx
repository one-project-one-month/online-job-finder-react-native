import ExpoImage from "@/components/common/ExpoImage";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";

export default function CompanyListBox() {
  const fakeArr = Array.from({ length: 16 });
  return (
    <Box className="pr-6">
      <FlashList
        data={fakeArr}
        renderItem={() => (
          <Link
            href={{
              pathname: "/companyDetail/[slug]",
              params: { slug: 1 },
            }}
            className=" max-w-[100px] ml-6"
          >
            <Card className=" w-full px-0 pb-0 bg-transparent">
              <ExpoImage
                source={require("@/assets/images/img/google.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  margin: "auto",
                }}
              />
              <Text size="sm" className=" line-clamp-1 mt-2 text-center">
                Myanmar Tech
              </Text>
            </Card>
          </Link>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={100}
      />
    </Box>
  );
}
