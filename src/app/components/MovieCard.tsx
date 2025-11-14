"use client";

import Link from "next/link";
import type { OmdbMovie } from "../../types/movie";

type MovieCardProps = {
  movie: OmdbMovie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <Link
      href={`/movie/${movie.imdbID}`}
      className="group flex-shrink-0 w-32 sm:w-40 lg:w-44"
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
        {hasPoster ? (
          // Use regular <img> to avoid next/image domain config
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>
      <p className="mt-2 text-xs sm:text-sm text-gray-200 line-clamp-2">
        {movie.Title}
      </p>
      <p className="text-[0.7rem] text-gray-400">{movie.Year}</p>
    </Link>
  );
}
