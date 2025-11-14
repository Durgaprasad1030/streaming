// lib/omdb.ts
export async function searchMovies(query: string) {
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey) throw new Error("Missing OMDB_API_KEY in .env.local");

  const url = `${process.env.OMDB_BASE_URL}?apikey=${apiKey}&s=${query}`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();

  if (data.Response === "False") return [];
  return data.Search || [];
}

export async function fetchMovieById(id: string) {
  const apiKey = process.env.OMDB_API_KEY;
  if (!apiKey) throw new Error("Missing OMDB_API_KEY in .env.local");

  const url = `${process.env.OMDB_BASE_URL}?apikey=${apiKey}&i=${id}&plot=full`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  const data = await res.json();

  if (data.Response === "False") throw new Error("Movie not found");
  return data;
}
