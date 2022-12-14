"use client";

import { trendingAtom } from "../utils/store";
import { useAtom } from "jotai";
import Card from "./Card";

export default function Trending() {
  const [trending] = useAtom(trendingAtom);

  return (
    <div>
      <h1>Trending</h1>
      <div className="grid grid-flow-col pr-4 md:pr-7 lg:pr-9 gap-4 sm:gap-8 lg:gap-10 overflow-x-scroll scrollbar-hide snap-mandatory snap-x [grid-auto-columns:minmax(64vw,1fr)] md:[grid-auto-columns:minmax(57vw,1fr)] lg:[grid-auto-columns:minmax(32vw,1fr)]" tabIndex={0} >
        {trending.map((t, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = t;
          return (
            <Card
              key={i}
              title={title}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              isTrending={true}
              image={
                thumbnail.trending?.large
                  ? thumbnail.trending?.large
                  : thumbnail.regular.large
              }
              className="snap-center"
            />
          );
        })}
      </div>
    </div>
  );
}
