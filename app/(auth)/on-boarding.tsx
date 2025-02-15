import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { OnBoardScreens } from "@/constants/on-board-data";
import OnBoardingSlide from "@/components/screens/onboarding/OnBoardingSlide";
import OnBoardingFooter from "@/components/screens/onboarding/OnBoardingFooter";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("screen");

export default function OnBoardingScreen() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const ref = React.useRef<FlatList>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentIndex + 1;
    if (nextSlideIndex != OnBoardScreens.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentIndex(currentIndex + 1);
    }
  };
  const skip = () => {
    const lastIndex = OnBoardScreens.length - 1;
    const offset = lastIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentIndex(lastIndex);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.circle}></View>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={OnBoardScreens}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <OnBoardingSlide item={item} currentId={currentIndex} key={item.id} />
        )}
      />
      <OnBoardingFooter
        currentId={currentIndex}
        next={goToNextSlide}
        skip={skip}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    position: "relative",
  },
  circle: {
    width: width + 100,
    height: width + 100,
    borderRadius: width + 100 / 2,
    backgroundColor: "#cbd5e1",
    position: "absolute",
    top: -width + 100 / 2,
    left: -50,
    zIndex: 10,
  },
});
