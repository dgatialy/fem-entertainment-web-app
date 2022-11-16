'use client';

import { seriesAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../../components/ListItem/ListItem';

export default function Series() {
  const [series] = useAtom(seriesAtom);

  return (
    <div>
      <h1>Series</h1>
      {series.map((s, i) => {
        const { title, year, category, rating, isBookmarked, thumbnail } = s;
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
