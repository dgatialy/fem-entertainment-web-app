"use client";

import { bookmarkedMoviesAtom, bookmarkedSeriesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";
import GridLayout from "../../layouts/GridLayout";
import ContentLayout from "../../layouts/ContentLayout";

export default function Bookmarks() {
  const [series] = useAtom(bookmarkedSeriesAtom);
  const [movies] = useAtom(bookmarkedMoviesAtom);

  return (
    <div className="space-y-10">
      {movies.length > 0 && (
        <ContentLayout>
          <h1 className="pb-8">Bookmarked Movies</h1>
          <GridLayout>
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
          </GridLayout>
        </ContentLayout>
      )}

      {series.length > 0 && (
        <ContentLayout>
          <h1 className="pb-8">Bookmarked Series</h1>
          <GridLayout>
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
          </GridLayout>
        </ContentLayout>
      )}
    </div>
  );
}
