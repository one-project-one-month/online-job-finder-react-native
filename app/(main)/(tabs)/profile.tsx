import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSession } from "@/provider/ctx";
import SafeView from "@/components/common/SafeView";
import useOnboardState from "@/store/useOnboardState";

export default function ProfilePage() {
  const { signOut } = useSession();
  const { setIsOnboarded } = useOnboardState();
  return (
    <SafeView>
      <View>
        <Text>profile</Text>
        <Text
          onPress={() => {
            // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
            setIsOnboarded(false);
            signOut();
          }}
        >
          Sign Out
        </Text>
      </View>
    </SafeView>
  );
}

const styles = StyleSheet.create({});
