'use client';

import { moviesAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../../components/ListItem/ListItem';

export default function Movies() {
  const [movies] = useAtom(moviesAtom);

  return (
    <div>
      <h1>Movies</h1>
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
  );
}
