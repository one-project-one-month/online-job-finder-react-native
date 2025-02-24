import SplashScreenPage from "@/components/screens/SplashScreenPage";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SessionProvider } from "@/provider/ctx";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import ModelProvider from "@/provider/ModelProvider";

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
    return (
      <GluestackUIProvider mode="light">
        <SessionProvider>
          <SplashScreenPage onFinish={() => setIsReady(true)} />
        </SessionProvider>
      </GluestackUIProvider>
    );
  }
  return (
    <GluestackUIProvider mode="light">
      <SessionProvider>
        <ModelProvider>
          <Slot />
        </ModelProvider>
      </SessionProvider>
    </GluestackUIProvider>
  );
}
