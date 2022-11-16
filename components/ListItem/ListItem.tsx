'use client';

import { toggleBookmarkAtom } from '../../utils/store';
import type { Media } from '../../utils/store';
import { useAtom } from 'jotai';

type Props = {
    title: string,
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean,
    image: string
}

export default function ListItem({ title, year, category, rating, isBookmarked, image }: Props) {
  const [, toggleTodo] = useAtom(toggleBookmarkAtom);

  return (
    <>
      <li>
        {title}
        <br />
        {isBookmarked}
        <button onClick={() => toggleTodo(title)}>
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </button>
      </li>
    </>
  );
}
