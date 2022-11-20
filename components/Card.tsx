"use client";
import Thumbnail from "./Thumbnail";
import { Series, Movies } from "../icons";
import CardLayout from "../layouts/CardLayout";
import CardTrendingLayout from "../layouts/CardTrendingLayout";

type cardProps = {
  title: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  image: string;
  className?: string;
};

export default function Card({
  title,
  year,
  category,
  rating,
  isBookmarked,
  image,
  isTrending,
  className,
}: cardProps & React.HTMLAttributes<HTMLDivElement>) {
  const cardProps = {
    thumbnail: (
      <Thumbnail
        image={image}
        isBookmarked={isBookmarked}
        title={title}
        className={"group/card"}
        isTrending={isTrending}
      />
    ),
    category: (
      <>
        {category === "Movie" ? (
          <Movies className={"w-3 h-3"} />
        ) : (
          <Series className={"w-3 h-3"} />
        )}
        {category}
      </>
    ),
    year: year,
    rating: rating,
    title: title,
    className: className,
  };

  return (
    <>
      {isTrending && <CardLayout {...cardProps} />}
      {!isTrending && <CardTrendingLayout {...cardProps} />}
    </>
  );
}
