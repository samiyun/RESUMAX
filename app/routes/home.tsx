import { resumes } from "~/constants";
import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import ResumeCard from "~/components/resumecard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Marking" },
    { name: "description", content: "Feedback for your dream jobs" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and  get AI-powered feedback</h2>
      </div>
    </section>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
  </main>
}
