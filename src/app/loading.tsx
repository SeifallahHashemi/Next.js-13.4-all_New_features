import React from "react";

const Loading = () => {
  // @ts-ignore
  const arr: number[] = [...new Array(10).keys()];
  return <div>Loading...</div>;
};

export default Loading;
