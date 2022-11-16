'use client';

import { toggleBookmarkAtom } from '../../utils/store';
import type { Media } from '../../utils/store';
import { useAtom } from 'jotai';

export default function ListItem({ title, isBookmarked }: Media) {
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