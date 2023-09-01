"use client";
// Material UI - Font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SearchParamsGuide from "@/components/Next-js-13/searchParams/search-params-guide";
import SetSearchParams from "@/components/Next-js-13/searchParams/set-search-params";
import {Suspense} from "react";
import DataDisplay from "@/components/Next-js-13/searchParams/data-display";
// Material UI - Components

export default async function Home({
  searchParams,
}: {
  searchParams: string | undefined;
}) {
  console.log(searchParams);
  return (
    <>
      <SearchParamsGuide />
        <Suspense fallback={<div>Loading...</div>} key={searchParams?.id}>
            <DataDisplay id={searchParams?.id} name={searchParams?.name} />
        </Suspense>
      <SetSearchParams />
    </>
  );
}
