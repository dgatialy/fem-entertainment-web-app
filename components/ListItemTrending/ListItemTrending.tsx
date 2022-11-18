"use client";

import Thumbnail from "../Thumbnail";
import { Series, Movies } from "../../icons";

type Props = {
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  image: string;
  className?: string;
};

export default function ListItemTrending({
  title,
  year,
  category,
  rating,
  isBookmarked,
  image,
  className,
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`group/card cursor-pointer flex flex-col gap-1.5 relative ${className}`}
    >
      <Thumbnail
        image={image}
        isBookmarked={isBookmarked}
        title={title}
        isTrending={true}
      />

      <div className="absolute left-0 bottom-0 p-6 flex flex-col w-full bg-gradient-to-t from-black/75 to-blue-black/01 rounded-lg">
        <div className="flex gap-2 text-base leading-tight font-light opacity-75">
          <span className="flex gap-2 after:content-['·']">{year}</span>
          <span className="flex gap-2 after:content-['·']">
            <span className="flex gap-1.5 items-center">
              {category === "Movie" ? (
                <Movies className={"w-3.5 h-3.5"} />
              ) : (
                <Series className={"w-3.5 h-3.5"} />
              )}
              {category}
            </span>
          </span>
          <span>{rating}</span>
        </div>
        <div className="font-medium text-2xl leading-tight">{title}</div>
      </div>
    </div>
  );
}
