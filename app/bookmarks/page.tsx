"use client";

import { bookmarkedMoviesAtom, bookmarkedSeriesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";

export default function Bookmarks() {
  const [series] = useAtom(bookmarkedSeriesAtom);
  const [movies] = useAtom(bookmarkedMoviesAtom);

  return (
    <div className="space-y-10">
      {movies.length > 0 && (
        <div className="pr-4 md:pr-7 lg:pr-9">
          <h1 className="pb-8">Bookmarked Movies</h1>
          <div className="grid grid-cols-2 gap-5 lg:gap-9 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((r, i) => {
              const { title, year, category, rating, isBookmarked, thumbnail } =
                r;
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
      )}

      {series.length > 0 && (
        <div className="pr-4 md:pr-7 lg:pr-9">
          <h1 className="pb-8">Bookmarked Series</h1>
          <div className="grid grid-cols-2 gap-5 lg:gap-9 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {series.map((r, i) => {
              const { title, year, category, rating, isBookmarked, thumbnail } =
                r;
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
      )}
    </div>
  );
}
