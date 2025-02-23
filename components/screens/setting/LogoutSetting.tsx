import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { useSession } from "@/provider/ctx";
import useOnboardState from "@/store/useOnboardState";
import { LogOut } from "lucide-react-native";
import React from "react";

export default function LogoutSetting() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const { signOut } = useSession();
  const { setIsOnboarded } = useOnboardState();
  const handleSignOut = async () => {
    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
    setIsOnboarded(false);
    signOut();
  };
  const handleClose = () => setShowAlertDialog(false);
  return (
    <>
      <Pressable onPress={() => setShowAlertDialog(true)}>
        <HStack space="lg" className=" items-center">
          <LogOut strokeWidth={1.75} size={22} color={"#9ca3af"} />
          <Text size="md" className=" font-medium">
            Logout
          </Text>
        </HStack>
      </Pressable>
      <AlertDialog
        isOpen={showAlertDialog}
        closeOnOverlayClick={false}
        onClose={handleClose}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent className="w-full max-w-[300px] gap-4 items-center">
          <AlertDialogHeader className="mb-2">
            <Heading size="md">Logout ?</Heading>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="md" className="text-center text-gray-500">
              Are you sure you want to logout?
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="mt-5">
            <Button
              size="sm"
              onPress={handleSignOut}
              className=" h-12 w-[100px] bg-primary-main"
            >
              <ButtonText>Yes</ButtonText>
            </Button>
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
              className=" h-12 w-[100px]"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
