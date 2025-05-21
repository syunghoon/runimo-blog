import { getAllPosts } from "@/lib/api";
import Container from "@/app/_components/container";
import InterviewSection from "./interview-section";
import FeatureSection from "./feature-section";
import TechSection from "./tech-section";

import RiveTest from "@/app/_components/rive-test";

export default function StorePage() {
  const posts = getAllPosts().filter((post) => post.type === "magazine");

  const featurePosts = posts.filter((post) => post.tags?.includes("Feature"));
  const interviewPosts = posts.filter((post) => post.tags?.includes("Interview"));
  const aiPosts = posts.filter((post) => post.tags?.includes("AI"));

  return (
    <main className="py-20">
      <h2 className="mb-12 text-center font-bold">매거진</h2>
      <div className="h-64 w-full">
        <RiveTest></RiveTest>
      </div>
      <Container>
        {featurePosts.length > 0 && <FeatureSection posts={featurePosts} />}
        {interviewPosts.length > 0 && <InterviewSection posts={interviewPosts} />}
        {aiPosts.length > 0 && <TechSection posts={aiPosts} />}
      </Container>
    </main>
  );
}
