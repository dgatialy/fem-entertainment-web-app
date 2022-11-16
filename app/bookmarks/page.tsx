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
          <ul>
            {movies.map((m, i) => (
              <ListItem key={i} {...m} />
            ))}
          </ul>
        </>
      )}

      {series.length > 0 && (
        <>
          <h2>Bookmarked Series</h2>
          <ul>{series && series.map((s, i) => <ListItem key={i} {...s} />)}</ul>
        </>
      )}
    </div>
  );
}
