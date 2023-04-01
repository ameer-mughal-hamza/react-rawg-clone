import React from "react";
import { Card, CardBody, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { RawgGameResult } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../utilities/imageUrl";

interface Props {
  game: RawgGameResult;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width={"300px"} borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore metacritic={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
