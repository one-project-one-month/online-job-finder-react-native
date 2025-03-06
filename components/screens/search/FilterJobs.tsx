import JobFilterIconSvg from "@/assets/images/icons/JobFilterIconSvg";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@/components/ui/actionsheet";
import { Pressable } from "@/components/ui/pressable";
import React from "react";

export default function FilterJobs() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  return (
    <>
      <Pressable
        onPress={() => setShowActionsheet(true)}
        className="w-14 h-14 rounded-[10px] border border-gray-200 items-center justify-center"
      >
        <JobFilterIconSvg />
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
