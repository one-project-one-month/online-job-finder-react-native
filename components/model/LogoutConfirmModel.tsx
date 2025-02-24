import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { useLogoutState } from "@/store/useLogoutState";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Button, ButtonText } from "../ui/button";
import { useSession } from "@/provider/ctx";
import useOnboardState from "@/store/useOnboardState";

export default function LogoutConfirmModel() {
  const { signOut } = useSession();
  const { setIsOnboarded } = useOnboardState();
  const { isLogoutState, setIsLogout } = useLogoutState();
  const handleSignOut = async () => {
    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
    setIsOnboarded(false);
    signOut();
    setIsLogout(false);
  };
  return (
    <AlertDialog
      isOpen={isLogoutState}
      closeOnOverlayClick={false}
      onClose={() => setIsLogout(false)}
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
            onPress={() => setIsLogout(false)}
            size="sm"
            className=" h-12 w-[100px]"
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
