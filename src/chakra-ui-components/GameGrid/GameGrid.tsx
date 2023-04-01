import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import useData from "../../hooks/useData";
import useGames, { Game, Platform } from "../../hooks/useGames";
import { Genre } from "../../hooks/useGenres";
import BoxContainer from "../BoxContainer";
import CriticScore from "../CriticScore";
import GameCard from "../GameCard/GameCard";
import GameCardSekelton from "../GameCardSekelton";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import "./GameGrid.module.css";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {!isLoading && data.length === 0 && (
        <Box marginY="10px" marginRight="10px">
          <Card>
            <CardBody>
              <Heading fontSize="2xl">No Data Found!</Heading>
            </CardBody>
          </Card>
        </Box>
      )}
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
    </>
  );
};

export default GameGrid;
