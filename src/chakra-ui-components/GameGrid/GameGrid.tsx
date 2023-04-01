import React, { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import "./GameGrid.module.css";
interface RawgGameResult {
  id: number;
  name: string;
  slug: string;
}

interface RawgGame {
  count: number;
  next: string;
  previous: string;
  results: RawgGameResult[];
}

const GameGrid = () => {
  const [games, setGames] = useState<RawgGameResult[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<RawgGame>("/games")
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => {
        setErrors(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <p className="alert alert-danger">{error}</p>}
      {isLoading && (
        <>
          <div className="loader">
            <div className="spinner spinner-border"></div>
          </div>
        </>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
