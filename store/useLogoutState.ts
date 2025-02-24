import { create } from "zustand";

type LogoutState = {
  isLogoutState: boolean;
  setIsLogout: (isLogoutState: boolean) => void;
};

export const useLogoutState = create<LogoutState>((set) => ({
  isLogoutState: false,
  setIsLogout: (isLogoutState: boolean) => set({ isLogoutState }),
}));
