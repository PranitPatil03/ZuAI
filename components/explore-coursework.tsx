"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export function ExploreCoursework() {
  const categories = ["Essays", "Research Papers", "Projects"];

  return (
    <Tabs defaultValue="Essays">
      <TabsList>
        {categories.map((category) => (
          <TabsTrigger key={category} value={category}>
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category} value={category}>
          <div className="grid grid-cols-3 gap-4">
            <div className="border p-4">Example {category} 1</div>
            <div className="border p-4">Example {category} 2</div>
            <div className="border p-4">Example {category} 3</div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
