"use client";
import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { mediaAtom, searchAtom } from "../utils/store";
import type { Media } from "../utils/store";
import { useState } from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import GridLayout from "../layouts/GridLayout";
import Card from "./Card";
import { useEffect } from "react";
import { Search as SearchIcon } from "../icons";
import { Close } from "../icons";

export default function Search() {
  const [data] = useAtom(mediaAtom);
  const [search, setSearch] = useAtom(searchAtom);
  const [resultsCount, setResultsCount] = useState(0);
  const [movies, setMovies] = useState<Media[]>([]);
  const [series, setSeries] = useState<Media[]>([]);
  const [query, setQuery] = useState("");

  // Store search input to state
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  // Observe changes in search input
  useEffect(() => {
    setSearch(query.length > 0);
    if (query.length > 0) {
      const res = data.filter((m) =>
        m.title.toLowerCase().includes(query.toLowerCase())
      );
      setResultsCount(res.length);
      setMovies(res.filter((r) => r.category === "Movie"));
      setSeries(res.filter((r) => r.category === "TV Series"));
    }
  }, [query, data, setSearch]);

  const pathname = usePathname();

  // Clear/reset search on page navigation or Escape-Key.
  useEffect(() => {
    if (search) return;
    setMovies([]);
    setSeries([]);
    setResultsCount(0);
    setQuery("");
  }, [search]);

  useEffect(() => {
    setSearch(false);
  }, [pathname, setSearch]);

  useEffect(() => {
    const keyDownHandler = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSearch(false);
      }
    };

    if (search) document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [search, setSearch]);

  return (
    <ContainerLayout>
      <div className="flex gap-4 lg:pt-7 mb-5 sm:mb-7 lg:mb-8">
        <SearchIcon className="w-5 h-5 sm:w-7 sm:h-7 sm:mt-1" />

        <input
          className="appearance-none w-full pb-3 lg:pb-3.5 bg-transparent text-base leading-5 sm:text-2xl font-light placeholder:color-primary/50 focus:outline-none focus:border-b focus:border-on-surface"
          type="search"
          id="search"
          onChange={onChangeHandler}
          name="q"
          placeholder="Search for movies and TV Series"
          value={query}
        />
        <div
          onClick={(e) => {
            e.preventDefault();
            setSearch(false);
          }}
          className="absolute right-2 sm:right-7 cursor-pointer"
        >
          <Close className={`fill-primary ${search ? "" : "hidden"}`} />
        </div>
      </div>
      {resultsCount > 0 && query.length > 0 && (
        <div className="absolute bg-default z-40 pr-4 sm:pr-6 lg:pr-9">
          <h1 className="text-on-surface pb-2">
            Found {resultsCount} {resultsCount < 2 ? "result" : "results"} for
            &apos;
            {query}&apos;
          </h1>
          <div className="space-y-10">
            {movies.length > 0 && (
              <div>
                <h2>Movies</h2>
                <GridLayout>
                  {movies.map((r, i) => (
                    <Card
                      key={i}
                      title={r.title}
                      year={r.year}
                      category={r.category}
                      rating={r.rating}
                      isBookmarked={r.isBookmarked}
                      image={r.thumbnail.regular.large}
                      isTrending={false}
                    />
                  ))}
                </GridLayout>
              </div>
            )}
            {series.length > 0 && (
              <div>
                <h2>TV Series</h2>
                <GridLayout>
                  {series.map((r, i) => (
                    <Card
                      key={i}
                      title={r.title}
                      year={r.year}
                      category={r.category}
                      rating={r.rating}
                      isBookmarked={r.isBookmarked}
                      image={r.thumbnail.regular.large}
                      isTrending={false}
                    />
                  ))}
                </GridLayout>
              </div>
            )}
          </div>
        </div>
      )}
      {resultsCount === 0 && query.length > 0 && (
        <h1>No results for &apos;{query}&apos;</h1>
      )}
    </ContainerLayout>
  );
}
