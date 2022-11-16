import { atom } from 'jotai';
import data from './data.json';

export type Media = {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};

// All Movies & TV Series
export const mediaAtom = atom<Media[]>(data);

// All Movies
export const moviesAtom = atom((get) =>
  get(mediaAtom).filter((m) => m.category === 'Movie')
);

// All TV Series
export const seriesAtom = atom((get) =>
  get(mediaAtom).filter((m) => m.category === 'TV Series')
);

// All Bookmarked Movies
export const bookmarkedMoviesAtom = atom((get) =>
  get(moviesAtom).filter((m) => m.isBookmarked)
);

// All Bookmarked TV Series
export const bookmarkedSeriesAtom = atom((get) =>
  get(seriesAtom).filter((m) => m.isBookmarked)
);

// Find Movie & TV Series by title and toggle isBookmarked status
// Would be better to have somethin more reliable e.g. id/uuid instead of title
// I wonder if this is a good pattern because: iterate the whole media array. I guess having single atoms for each media and then updating just the atom would be better 
const toggleBookmark = (media: Media[], title: string): Media[] =>
  media.map((m) => ({
    ...m,
    isBookmarked: m.title === title ? !m.isBookmarked : m.isBookmarked,
  }));

 // Toggle Bookmark status of Movie or TV Series in atom that holds all Movies & TV Series 
export const toggleBookmarkAtom = atom(null, (get, set, title: string) => {
  set(mediaAtom, toggleBookmark(get(mediaAtom), title));
});
