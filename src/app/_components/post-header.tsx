import TagList from "./tag-list";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Tags } from "@/interfaces/tag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  tag: Tags;
};

export function PostHeader({ title, coverImage, date, tag, excerpt }: Props) {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="flex flex-row items-center gap-6 md:mb-6">
        <DateFormatter dateString={date} />
        <TagList tags={tag} />
      </div>
      <PostTitle>{title}</PostTitle>
      <h4 className="mx-auto mb-12 max-w-2xl text-center text-sm text-secondary-gray">{excerpt}</h4>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
    </div>
  );
}
