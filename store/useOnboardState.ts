import { create, StateCreator } from "zustand";
import {
  createJSONStorage,
  persist,
  PersistOptions,
  StateStorage,
} from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, "has been retrieved");
    const data = (await AsyncStorage.getItem(name)) || null;

    console.log("data: ", data);
    return data;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, "with value", value, "has been saved");
    await AsyncStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, "has been deleted");
    await AsyncStorage.removeItem(name);
  },
};

type AuthState = {
  isOnboarded: boolean;
  setIsOnboarded: (isOnboarded: boolean) => void;
};

type AuthPersist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

const useOnboardState = create<AuthState>(
  (persist as AuthPersist)(
    (set) => ({
      isOnboarded: false,
      setIsOnboarded: (isOnboarded: boolean) => set({ isOnboarded }),
    }),
    {
      name: "onboard-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);

export default useOnboardState;
