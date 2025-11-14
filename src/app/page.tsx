// app/page.tsx
import { searchMovies } from "../../lib/tmdb";
import MovieRow from "./components/MovieRow";

export default async function HomePage() {
  const batman = await searchMovies("batman");
  const spiderman = await searchMovies("spider");
  const avengers = await searchMovies("avenger");

  return (
    <div className="space-y-8">
      <MovieRow title="Batman Movies" movies={batman} />
      <MovieRow title="Spider-Man Movies" movies={spiderman} />
      <MovieRow title="Avengers Movies" movies={avengers} />
    </div>
  );
}
