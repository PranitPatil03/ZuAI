import { FileUpload } from "@/components/file-upload";
import { CourseworkForm } from "@/components/coursework-form";
import { EvaluationDisplay } from "@/components/evaluation-display";
import { CourseworkList } from "@/components/coursework-list";
import { ExploreCoursework } from "@/components/explore-coursework";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Coursework Evaluator</h1>
      <FileUpload />
      <CourseworkForm />
      <EvaluationDisplay />
      <CourseworkList />
      <ExploreCoursework />
    </main>
  );
}
