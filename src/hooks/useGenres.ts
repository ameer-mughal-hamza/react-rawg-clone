import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { RawgGameResult, RawgGame } from "./useGames";

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

function useGenre() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setErrors(err.message);
        setIsLoading(false);
      });

    // Cleanup function
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}

export default useGenre;