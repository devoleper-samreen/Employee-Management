import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            login: (userData) => set({ user: userData }),
            logout: () => set({ user: null })
        }),
        {
            name: "Auth-storage",
            storage: createJSONStorage(() => localStorage)
        }

    )
);

export default useAuthStore;
