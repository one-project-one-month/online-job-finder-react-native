import React from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("screen");
export default function OnBoardingSlide({
  item,
  currentId,
}: {
  item: any;
  currentId: number;
}) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade to full opacity
      duration: 100, // 500ms fade-in duration
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View
      style={[
        styles.screen,
        { opacity: currentId === item.id - 1 ? fadeAnim : 0 },
      ]}
    >
      <View style={{ height: height / 4, marginBottom: 10 }}>{item.image}</View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    color: "#95969D",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 21,
  },
});
