import { SimpleGrid } from "@chakra-ui/react";
import useData from "../../hooks/useData";
import useGames, { Game } from "../../hooks/useGames";
import { Genre } from "../../hooks/useGenres";
import BoxContainer from "../BoxContainer";
import GameCard from "../GameCard/GameCard";
import GameCardSekelton from "../GameCardSekelton";
import "./GameGrid.module.css";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, isLoading } = useGames(selectedGenre);
  const skeletons: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding="10px">
        {isLoading &&
          skeletons.map((skeleton: number) => (
            <BoxContainer key={skeleton}>
              <GameCardSekelton />
            </BoxContainer>
          ))}
        {data.map((game) => (
          <BoxContainer key={game.id}>
            <GameCard game={game} />
          </BoxContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
