import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSekelton = () => {
  return (
    <Card width={"300px"}>
      <Skeleton
        height={"200px"}
        borderRadius="10px"
        overflow={"hidden"}
      ></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSekelton;
