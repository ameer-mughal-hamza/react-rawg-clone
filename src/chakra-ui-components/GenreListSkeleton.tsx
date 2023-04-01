import { List, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <>
      <Skeleton height={"32px"} marginY="5px"></Skeleton>
    </>
  );
};

export default GenreListSkeleton;
