"use client";
// Material UI - Font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Material UI - Components
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MediaCard from "@/components/Material UI/Card/media-card";
import { pink, teal } from "@mui/material/colors";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: pink[700],
    },
    secondary: {
      main: teal[600],
    },
  },
});

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Product not found");
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(res.json());

    }, 1000)
  })
}
export default async function Home() {
  const data = await getProducts();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      {/*<ButtonUsage />*/}
      <section className={"max-w-max h-96 mx-auto mt-10"}>
        {data?.products.map((item?: object) => {
          // @ts-ignore
          const {id, thumbnail, title, description} = item;
          return (
            <MediaCard
              heading={title}
              text={description}
              key={id}
              src={thumbnail}
            />
          );
        })}
      </section>
    </ThemeProvider>
  );
}
