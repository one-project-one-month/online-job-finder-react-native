import SafeView from "@/components/common/SafeView";
import { useSession } from "@/provider/ctx";
import useOnboardState from "@/store/useOnboardState";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function SignIn() {
  const { isOnboarded } = useOnboardState();
  const { signIn, session } = useSession();
  if (!isOnboarded) {
    return <Redirect href="/on-boarding" />;
  }
  if (session) {
    return <Redirect href="/" />;
  }
  return (
    <SafeView>
      <StatusBar style="dark" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          onPress={() => {
            signIn();
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.replace("/");
          }}
          style={{ fontSize: 20 }}
        >
          Sign In
        </Text>
      </View>
    </SafeView>
  );
}
