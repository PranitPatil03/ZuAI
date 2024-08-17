"use client"

import { useStore } from "@/lib/store";

export function CourseworkList() {
  const courseWorks = useStore((state) => state.courseWorks);

  return (
    <div>
      <h2>My Coursework</h2>
      <ul>
        {courseWorks.map((coursework, index) => (
          <li key={index}>
            <h3>{coursework.title}</h3>
            <p>Type: {coursework.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
