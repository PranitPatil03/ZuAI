"use client"

import { useState } from "react";
import { useStore } from "@/lib/store";

export function FileUpload() {
  const [dragActive, setDragActive] = useState(false);
  const addFile = useStore((state) => state.addFile);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    addFile(files[0]);
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed p-4 ${
        dragActive ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <p>Drag and drop a PDF file here, or click to select a file</p>
      <input
        type="file"
        accept=".pdf"
        onChange={handleChange}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer text-blue-500">
        Upload your file
      </label>
      <p className="text-sm text-gray-500">Limit 25 MB per file</p>
    </div>
  );
}
