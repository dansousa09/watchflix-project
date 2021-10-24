/* eslint-disable import/no-anonymous-default-export */

const API_KEY = "a3b5bc84405dbe67d1a8b222dd8e72d5";
const API_BASE = "https://api.themoviedb.org/3";

const getWatchItems = async (endpoint: string) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  const data = response.json();
  return data;
};

export default {
  watchList: async () => {
    return [
      {
        slug: "trending",
        title: "Destaques",
        items: await getWatchItems(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "originals",
        title: "Originais",
        items: await getWatchItems(
          `/discover/tv?with_network=213?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Recomendados",
        items: await getWatchItems(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
