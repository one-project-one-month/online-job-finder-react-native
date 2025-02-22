import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import ProgressBar from "react-native-progress/Bar";
import LogoSvg from "@/assets/images/icons/LogoSvg";
import { StatusBar } from "expo-status-bar";
import { useSession } from "@/provider/ctx";

SplashScreen.preventAutoHideAsync();

export default function SplashScreenPage({ onFinish }) {
  const { isLoading } = useSession();
  const progress = useRef(new Animated.Value(0)).current;
  const [progressValue, setProgressValue] = useState(0); // Store progress as a number

  useEffect(() => {
    // Add a listener to the Animated.Value
    const listener = progress.addListener(({ value }) => {
      setProgressValue(value); // Update the progress value
    });

    // Start the animation
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(async () => {
      await SplashScreen.hideAsync();
      if (onFinish && !isLoading) onFinish();
    });

    // Clean up the listener
    return () => {
      progress.removeListener(listener);
      progress.removeAllListeners();
    };
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <LogoSvg style={styles.logo} />
      <View style={styles.progress}>
        <ProgressBar
          progress={progressValue} // Pass the number value
          width={200}
          color="#eab308"
          animationType={"spring"}
          borderRadius={5}
          style={{ marginTop: 20 }}
          useNativeDriver={false}
          height={3}
        />
        <Text
          style={{
            color: "white",
            fontSize: 12,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Power by OPOM
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a2d4f",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  progress: {
    position: "absolute",
    bottom: 45,
  },
});
