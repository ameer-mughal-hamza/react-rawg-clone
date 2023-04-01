import { Box } from "@chakra-ui/react";
import React from "react";

interface BoxContainerProps {
  children: React.ReactNode;
}

const BoxContainer = ({ children }: BoxContainerProps) => {
  return (
    <Box borderRadius="10px" overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default BoxContainer;
