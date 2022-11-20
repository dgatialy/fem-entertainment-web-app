"use client";

import { bookmarkedMoviesAtom, bookmarkedSeriesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";
import GridLayout from "../../layouts/GridLayout";
import ContainerLayout from "../../layouts/ContainerLayout";

function Bookmarks() {
  const [series] = useAtom(bookmarkedSeriesAtom);
  const [movies] = useAtom(bookmarkedMoviesAtom);

  return (
    <div className="space-y-10">
      {movies.length < 1 && series.length < 1 && (
        <span className="text-greyish-blue">
          <h1>No bookmarks.</h1>
          <p>Bookmark movies and TV Series and they will appear here.</p>
        </span>
      )}

      {movies.length > 0 && (
        <ContainerLayout>
          <h1>Bookmarked Movies</h1>
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
        </ContainerLayout>
      )}

      {series.length > 0 && (
        <ContainerLayout>
          <h1>Bookmarked Series</h1>
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
        </ContainerLayout>
      )}
    </div>
  );
}

export default Bookmarks;
