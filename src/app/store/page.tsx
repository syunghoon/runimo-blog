import { getAllPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/_components/container";
import CallToActionSection from "@/app/_components/landing/cta";

export default function StorePage() {
  const posts = getAllPosts().filter((post) => post.type === "store");

  return (
    <main className="mt-20">
      <h2 className="mb-12 text-center">스토어</h2>
      <Container>
        <div className="grid grid-cols-2 gap-10 rounded-lg border border-secondary-fill bg-primary-fill px-5 py-5 sm:grid-cols-4">
          {posts.map((post) => (
            <div key={post.slug} className="overflow-hidden">
              <Link href={`/posts/${post.slug}`}>
                <div className="relative aspect-square w-full">
                  {post.tags?.includes("품절") && (
                    <span className="absolute left-2 top-2 z-10 rounded bg-black bg-opacity-70 px-2 py-1 text-xs text-white">
                      품절
                    </span>
                  )}
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="py-4">
                  <h5 className="mb-2 text-primary-gray">{post.title}</h5>
                  <p className="w-full text-right text-secondary-gray">{post.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
      <CallToActionSection />
    </main>
  );
}
