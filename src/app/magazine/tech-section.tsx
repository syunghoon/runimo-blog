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

const TechSection = ({ posts }: Props) => {
  return (
    <section className="mb-20">
      <h3 className="mb-6">기술 블로그</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="mb-4 overflow-hidden rounded-lg border border-secondary-fill bg-primary-fill"
          >
            <Link href={`/posts/${post.slug}`}>
              <div className="relative aspect-[16/9] w-full">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="mb-4 text-primary-gray">{post.title}</h4>
                <p className="text-secondary-gray">{post.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
