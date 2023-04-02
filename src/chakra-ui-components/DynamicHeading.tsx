import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../interfaces/app-interfaces";

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading fontSize={"5xl"}>{heading}</Heading>;
};

export default DynamicHeading;
