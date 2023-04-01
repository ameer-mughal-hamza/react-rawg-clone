import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : metacritic > 50 ? "yellow" : "red";

  return (
    <Badge paddingX={3} colorScheme={color} fontSize={"16px"}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
