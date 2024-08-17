"use client"

import { useState } from "react";
import { useStore } from "@/lib/store";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

export function CourseworkForm() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const addCoursework = useStore((state) => state.addCoursework);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCoursework({ type, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{type || "Select coursework type"}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setType("Essay")}>
            Essay
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setType("Research Paper")}>
            Research Paper
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setType("Project")}>
            Project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        placeholder="Enter your essay title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit">Evaluate your Score</Button>
    </form>
  );
}
