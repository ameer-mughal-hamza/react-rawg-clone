import React from "react";
import { Card, CardBody, Heading, Text, Image } from "@chakra-ui/react";
import { RawgGameResult } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

interface Props {
  game: RawgGameResult;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
