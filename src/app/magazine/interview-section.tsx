"use client";

import Link from "next/link";
import Image from "next/image";

type Post = {
  slug: string;
  title: string;
  coverImage: string;
  excerpt: string;
};

type Props = {
  posts: Post[];
};

const InterviewSection = ({ posts }: Props) => {
  return (
    <section className="mb-20">
      <h3 className="mb-6">러니모 스토리</h3>
      <div className="space-y-10">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col items-center gap-6 rounded-lg border border-secondary-fill bg-primary-fill p-4 md:flex-row"
          >
            <div className="relative aspect-[16/9] w-full md:w-1/3">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <Link href={`/posts/${post.slug}`}>
                <h4 className="mb-4 text-primary-gray">{post.title}</h4>
              </Link>
              <p className="text-secondary-gray">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterviewSection;
