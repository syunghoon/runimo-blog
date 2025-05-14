import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="mb-8 text-center text-2xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-4xl">
      {children}
    </h1>
  );
}
