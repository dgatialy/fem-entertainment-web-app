'use client';

import { trendinAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../../components/ListItem/ListItem';

export default function Trending() {
  const [trending] = useAtom(trendinAtom);

  return (
    <div>
      <h1>Trending</h1>
      {trending.map((t, i) => {
        const { title, year, category, rating, isBookmarked, thumbnail } = t;
        return (
          <ListItem
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
          />
        );
      })}
    </div>
  );
}
