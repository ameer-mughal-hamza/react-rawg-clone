import React, { useEffect, useState } from "react";
import useGames from "../../hooks/useGames";
import apiClient from "../../services/apiClient";
import "./GameGrid.module.css";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

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
