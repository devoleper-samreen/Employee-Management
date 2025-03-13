import { create } from "zustand";

const useEmployeeTaskStore = create(
    (set, get) => ({
        myTasks: JSON.parse(localStorage.getItem("Task")) || [],
        addMyTask: (allTasks) => {
            const currentTasks = get().myTasks;

            if (JSON.stringify(currentTasks) !== JSON.stringify(allTasks)) {
                set({ myTasks: allTasks });
            }
        }
    })
);

export default useEmployeeTaskStore;
