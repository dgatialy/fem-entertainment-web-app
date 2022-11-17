"use client";

import { moviesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";

export default function Movies() {
  const [movies] = useAtom(moviesAtom);

  return (
    <div className="pr-4 md:pr-7 lg:pr-9">
      <h1 className="pb-8">Movies</h1>
      <div className="grid grid-cols-2 gap-5 lg:gap-9 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((m, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = m;
          return (
            <ListItem
              key={i}
              title={title}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              isTrending={false}
              image={thumbnail.regular.large}
            />
          );
        })}
      </div>
    </div>
  );
}
