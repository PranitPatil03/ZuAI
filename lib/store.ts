import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Coursework {
  type: string;
  title: string;
}

interface StoreState {
  files: File[];
  courseWorks: Coursework[];
  addFile: (file: File) => void;
  addCoursework: (coursework: Coursework) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      files: [],
      courseWorks: [],
      addFile: (file) => set((state) => ({ files: [...state.files, file] })),
      addCoursework: (coursework) =>
        set((state) => ({ courseWorks: [...state.courseWorks, coursework] })),
    }),
    {
      name: "coursework-storage",
    }
  )
);
