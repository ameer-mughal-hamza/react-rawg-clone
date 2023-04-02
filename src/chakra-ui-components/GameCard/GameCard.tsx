import { Card, CardBody, Heading, Text, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../utilities/imageUrl";
import Emoji from "../Emoji";
import { Game } from "../../interfaces/app-interfaces";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={5} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore metacritic={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
};

export default GameCard;
