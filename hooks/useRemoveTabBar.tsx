import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function useRemoveTabBar() {
  const navigation = useNavigation();
  useEffect(() => {
    // Hide the tab bar when this screen is focused
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });

    // Show the tab bar when this screen is unfocused
    return () => {
      navigation.setOptions({
        tabBarStyle: { display: "flex" },
      });
    };
  }, [navigation]);
  return null;
}
