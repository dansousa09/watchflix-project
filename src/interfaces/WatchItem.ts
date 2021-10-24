export interface WatchItems {
  slug: string;
  title: string;
  items: Items;
}

export interface Items {
  page: number;
  results: WatchItem[];
  total_pages: number;
  total_results: number;
}

export interface genreItem {
  id: number;
  name: string;
}

interface productionCompanies extends genreItem {
  logo_path: string | null;
  origin_country: string;
}

interface productionCountries {
  iso_3166_1: string;
  name: string;
}

interface spokenLanguages extends productionCountries {}

export interface WatchItem {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: genreItem[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: productionCompanies[];
  production_countries: productionCountries[];
  release_date: Date;
  revenue: number;
  runtime: number | null;
  spoken_languages: spokenLanguages[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
