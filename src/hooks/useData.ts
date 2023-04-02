import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import { GameQuery } from "../App";
import apiClient from "../services/apiClient";
import { Game } from "./useGames";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, gameQuery: GameQuery, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);
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
  }, [gameQuery]);

  return { data, error, isLoading };
}

export default useData;