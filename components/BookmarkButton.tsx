"use client";

import { BookmarkSolid, Bookmark } from "../icons";

type Props = {
  isBookmarked: boolean;
  className?: string;
  onClick?: () => void;
};

export default function BookmarkButton({
  isBookmarked = false,
  className,
  onClick,
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`group/bookmark rounded-full top-4 right-4 bg-dark-blue/50 p-2.5 hover:bg-pure-white cursor-pointer ${className}`}
      onClick={onClick}
    >
      {isBookmarked ? (
        <BookmarkSolid
          className={
            "w-3.5 h-3.5 fill-pure-white group-hover/bookmark:fill-dark-blue"
          }
        />
      ) : (
        <Bookmark
          className={
            "w-3.5 h-3.5 stroke-pure-white group-hover/bookmark:stroke-dark-blue"
          }
        />
      )}
    </div>
  );
}
