import { create } from "zustand";
import { getTasks } from "../utils/employeeLocalStorage"

const useEmployeeTaskStore = create(
    (set, get) => ({
        myTasks: getTasks() || [],
        addMyTask: (allTasks) => {
            const currentTasks = get().myTasks;

            if (JSON.stringify(currentTasks) !== JSON.stringify(allTasks)) {
                set({ myTasks: allTasks });
            }
        }
    })
);

export default useEmployeeTaskStore;
