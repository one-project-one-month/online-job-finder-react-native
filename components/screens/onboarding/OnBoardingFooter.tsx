import { OnBoardScreens } from "@/constants/on-board-data";
import useOnboardState from "@/store/useOnboardState";
import { useNavigation } from "expo-router";
import { Pressable, Text, View } from "react-native";

function OnBoardingFooter({
  currentId,
  next,
  skip,
}: {
  currentId: number;
  next: () => void;
  skip: () => void;
}) {
  const navigation = useNavigation();
  const { setIsOnboarded } = useOnboardState();
  return (
    <View style={{ position: "absolute", bottom: 50, gap: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          justifyContent: "center",
        }}
      >
        {OnBoardScreens.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: currentId === index ? 28 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: currentId === index ? "#94a3b8" : "#cbd5e1",
              }}
            ></View>
          );
        })}
      </View>
      {currentId === OnBoardScreens.length - 1 ? (
        <View>
          <Pressable
            style={{
              backgroundColor: "#2C557D",
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 10,
              width: 250,
            }}
            onPress={() => {
              setIsOnboarded(true);
              navigation.navigate("(auth)/sign-in" as never);
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Explore</Text>
          </Pressable>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Pressable
            onPress={skip}
            style={{
              // backgroundColor: "#2C557D",
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 10,
              width: 120,
            }}
          >
            <Text style={{ textAlign: "center" }}>Skip</Text>
          </Pressable>
          <Pressable
            onPress={next}
            style={{
              backgroundColor: "#2C557D",
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 10,
              width: 120,
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>Next</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default OnBoardingFooter;
