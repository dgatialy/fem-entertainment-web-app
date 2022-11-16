'use client';

import { bookmarkedMoviesAtom, bookmarkedSeriesAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../../components/ListItem/ListItem';

export default function Bookmarks() {
  const [series] = useAtom(bookmarkedSeriesAtom);
  const [movies] = useAtom(bookmarkedMoviesAtom);

  return (
    <div>
      {movies.length > 0 && (
        <>
          <h2>Bookmarked Movies</h2>

          {movies.map((m, i) => {
            const { title, year, category, rating, isBookmarked, thumbnail } =
              m;
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
        </>
      )}

      {series.length > 0 && (
        <>
          <h2>Bookmarked Series</h2>
          {series.map((s, i) => {
            const { title, year, category, rating, isBookmarked, thumbnail } =
              s;
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
        </>
      )}
    </div>
  );
}
