import { useRouter } from "next/router";
import React from "react";
import { Text } from "@nextui-org/react";

const contentRouter = () => {
  const router = useRouter();
  const { content } = router.query;
  console.log(content);
  
  return (
    <>
      <Text h4>Details about : {content}</Text>
    </>
  );
};

export default contentRouter;
