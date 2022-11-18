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

export default function ListItem({
  title,
  year,
  category,
  rating,
  isBookmarked,
  image,
  className,
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <Thumbnail
        image={image}
        isBookmarked={isBookmarked}
        title={title}
        className={"group/card"}
      />
      <div className="flex gap-2 text-sm leading-tight font-light opacity-75">
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
      <div className="font-medium text-lg leading-tight">{title}</div>
    </div>
  );
}
