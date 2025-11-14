"use client";

import MovieCard from "./MovieCard";
import type { OmdbMovie } from "../../types/movie";

type MovieRowProps = {
  title: string;
  movies: OmdbMovie[];
};

export default function MovieRow({ title, movies }: MovieRowProps) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-3 overflow-x-auto py-2">
        {movies.map((movie, index) => (
          <MovieCard
            key={`${movie.imdbID}-${index}`}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}
