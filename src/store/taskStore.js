import { create } from "zustand";
import { getTasks } from "../utils/adminLocalStorage"

const useTaskStore = create(
    (set) => ({
        tasks: getTasks() || [],
        addTask: (newTasks) => set((state) => ({
            tasks: [...newTasks]
        })),
        refreshTasks: () => set({ tasks: getTasks() })
    })
)

export default useTaskStore