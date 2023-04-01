import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useGames from "../../hooks/useGames";
import apiClient from "../../services/apiClient";
import GameCard from "../GameCard/GameCard";
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
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
