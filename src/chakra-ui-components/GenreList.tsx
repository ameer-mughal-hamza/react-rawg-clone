import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Heading,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import { Genre } from "../interfaces/app-interfaces";
import getCroppedImageUrl from "../utilities/imageUrl";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selecedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selecedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List padding={0}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={"8px"}
                boxSize={"32px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selecedGenre?.id === genre.id ? "bold" : "normal"}
                fontSize={"lg"}
                variant="link"
                whiteSpace="normal"
                textAlign={"left"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
