import React from "react";
import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";

const Loading = () => {
  // @ts-ignore
  const arr: number[] = [...new Array(10).keys()];
  return (
    <main className={"max-w-screen h-auto bg-[#121212] m-0 p-0"}>
      {arr.map((index) => (
        <div
          className={"max-w-max max-h-fit mx-auto flex bg-[#121212]"}
          key={index}
        >
          <Box
            sx={{
              width: "auto",
              height: "auto",
              backgroundColor: "#1E1E1E",
              overflow: "hidden",
              m: 0,
              paddingBlock: 2.5,
              paddingInline: 2,
              mt: 5,
            }}
          >
            <Skeleton
              variant="rectangular"
              width={600}
              height={300}
              style={{ borderRadius: ".2rem" }}
              sx={{ backgroundColor: "#808285" }}
            />
            <Skeleton width={"30%"} sx={{ backgroundColor: "#808285" }} />
            <Skeleton width="90%" sx={{ backgroundColor: "#808285" }} />
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Skeleton
                width={"40%"}
                height={"3rem"}
                sx={{ backgroundColor: "#808285" }}
              />
              <Skeleton
                width={"40%"}
                height={"3rem"}
                sx={{ backgroundColor: "#808285" }}
              />
            </Box>
          </Box>
        </div>
      ))}
    </main>
  );
};

export default Loading;
