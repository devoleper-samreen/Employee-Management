import { create } from "zustand";
import { getTasks } from "../utils/adminLocalStorage"

const useTaskStore = create(
    (set) => ({
        tasks: getTasks(),
        addTask: (allTasks) => set({ tasks: allTasks })
    })
)

export default useTaskStore