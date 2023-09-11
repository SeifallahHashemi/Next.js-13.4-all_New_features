"use client";
import React from "react";
import {simulateDelay} from "../../utils/utils";

export default async function Home() {
    const data = await simulateDelay("hello", 3000)
  return (
    <div className={"h-screen grid place-items-center bg-rose-500"}>
      Hello World - {data}
    </div>
  );
}
