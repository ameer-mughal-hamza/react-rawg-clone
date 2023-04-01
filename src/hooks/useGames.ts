import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>(
  "/games",
  [selectedGenre, selectedPlatform],
  {
    params: {
      genres: selectedGenre?.id,
      parent_platforms: selectedPlatform?.id
    }
  }
);

export default useGames;