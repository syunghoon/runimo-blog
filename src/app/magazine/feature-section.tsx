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

const FeatureSection = ({ posts }: Props) => {
  if (posts.length === 0) return null;

  const [first, ...rest] = posts;

  return (
    <section className="mb-20">
      <h3 className="mb-6">업데이트 노트</h3>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* Left - First large post */}
        <div className="md:col-span-2">
          <Link href={`/posts/${first.slug}`}>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={first.coverImage}
                alt={first.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="mt-4 text-primary-gray">{first.title}</h3>
            <p className="mt-2 text-secondary-gray">{first.excerpt}</p>
          </Link>
        </div>

        {/* Right - Smaller stacked posts */}
        <div className="flex flex-col gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="flex flex-col gap-4">
              <div className="relative aspect-[16/9] w-full shrink-0">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="text-sm">
                <h6 className="mb-1 text-primary-gray">{post.title}</h6>
                <p className="text-secondary-gray">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
