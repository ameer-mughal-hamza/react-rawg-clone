import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./chakra-ui-components/Navbar/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="pink">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
