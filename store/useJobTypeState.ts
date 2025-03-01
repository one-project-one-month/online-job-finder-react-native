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

type JobTypeState = {
  jobType: string;
  jobRole: string;
  setJobType: (data: string) => void;
  setJobRole: (data: string) => void;
};

type JobPersist = (
  config: StateCreator<JobTypeState>,
  options: PersistOptions<JobTypeState>
) => StateCreator<JobTypeState>;

const useJobTypeState = create<JobTypeState>(
  (persist as JobPersist)(
    (set) => ({
      jobType: "",
      jobRole: "",
      setJobType: (data: string) => set({ jobType: data }),
      setJobRole: (data: string) => set({ jobRole: data }),
    }),
    {
      name: "job-type-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);

export default useJobTypeState;
