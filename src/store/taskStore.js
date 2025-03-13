import { create } from "zustand";

const useTaskStore = create(
    (set) => ({
        tasks: JSON.parse(localStorage.getItem("Task")) || [],
        addTask: (newTasks) => set((state) => ({
            tasks: [...newTasks]
        })),
        refreshTasks: () => set({ tasks: JSON.parse(localStorage.getItem("Task")) })
    })
)

export default useTaskStore