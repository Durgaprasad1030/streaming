// src/app/components/HeroBanner.tsx
import Image from "next/image";
import Link from "next/link";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview?: string | null;
}

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const title = movie.title || movie.name || "Untitled";
  const backdropPath = movie.backdrop_path || movie.poster_path;

  return (
    <section className="relative w-full h-72 md:h-96 lg:h-[450px] mb-8 overflow-hidden rounded-2xl">
      {backdropPath ? (
        <Image
          src={`https://image.tmdb.org/t/p/original${backdropPath}`}
          alt={title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-700" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute bottom-6 left-4 md:left-8 max-w-xl space-y-3">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
          {title}
        </h1>

        {movie.overview && (
          <p className="text-sm md:text-base text-gray-200 line-clamp-3 md:line-clamp-4">
            {movie.overview}
          </p>
        )}

        <div className="flex gap-3 pt-2">
          <Link
            href={`/movie/${movie.id}`}
            className="bg-accent hover:bg-red-700 text-sm md:text-base font-semibold px-4 py-2 rounded-full"
          >
            More Info
          </Link>
          <button className="bg-white/10 hover:bg-white/20 text-sm md:text-base font-semibold px-4 py-2 rounded-full">
            Play
          </button>
        </div>
      </div>
    </section>
  );
}
