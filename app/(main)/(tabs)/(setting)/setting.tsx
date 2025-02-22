import { ScrollView } from "react-native";
import React from "react";
import SafeView from "@/components/common/SafeView";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { useSession } from "@/provider/ctx";
import useOnboardState from "@/store/useOnboardState";

export default function SettingScreen() {
  const { signOut } = useSession();
  const { setIsOnboarded } = useOnboardState();
  const handleSignOut = async () => {
    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
    setIsOnboarded(false);
    signOut();
  };
  return (
    <SafeView>
      <ScrollView>
        <Text>Setting</Text>
        <Pressable onPress={handleSignOut}>
          <Text>Logout</Text>
        </Pressable>
      </ScrollView>
    </SafeView>
  );
}
