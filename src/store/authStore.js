import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      setSession: (session) =>
        set({
          user: session.user,
          accessToken: session.tokens.accessToken,
          refreshToken: session.tokens.refreshToken
        }),
      logout: () => set({ user: null, accessToken: null, refreshToken: null })
    }),
    {
      name: "avion-auth"
    }
  )
);
