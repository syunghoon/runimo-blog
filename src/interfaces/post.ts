import { type Tags } from "./tag";

export type Post = {
  slug: string;
  title: string;
  date: string;
  type: string;
  coverImage: string;
  tags: Tags;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
