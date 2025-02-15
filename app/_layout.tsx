import SplashScreenPage from "@/components/screens/SplashScreenPage";
import { SessionProvider } from "@/provider/ctx";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";

export default function Root() {
  const [isReady, setIsReady] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  // Set up the auth context and render our layout inside of it.
  if (!isReady) {
    return <SplashScreenPage onFinish={() => setIsReady(true)} />;
  }
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
