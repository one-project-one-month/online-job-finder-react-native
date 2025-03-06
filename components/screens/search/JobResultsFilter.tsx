import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ArrowDownUp } from "lucide-react-native";
import React from "react";

export default function JobResultsFilter() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <>
      <Pressable onPress={() => setShowActionsheet(true)} className="">
        <ArrowDownUp size={18} color="#333" />
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack className=" w-full my-2 justify-between items-center">
            <Text size="md" className=" font-semibold text-primary-main">
              Job Results Filter
            </Text>
            <Text className=" text-red-500 ">Reset</Text>
          </HStack>
          <VStack space="sm" className=" w-full py-5">
            <ActionsheetItem
              onPress={handleClose}
              className=" border rounded-[10px] border-gray-200"
            >
              <ActionsheetItemText>Latest</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem
              onPress={handleClose}
              className=" border rounded-[10px] border-gray-200"
            >
              <ActionsheetItemText>Past Week</ActionsheetItemText>
            </ActionsheetItem>
            <ActionsheetItem
              onPress={handleClose}
              className=" border rounded-[10px] border-gray-200"
            >
              <ActionsheetItemText>Past Month</ActionsheetItemText>
            </ActionsheetItem>
          </VStack>
          {/* <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem> */}
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
