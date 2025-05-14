type Props = {
  tags: string[];
};

const TagList = ({ tags }: Props) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-secondary-fill px-3 py-2 text-xs font-medium text-primary-gray"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
