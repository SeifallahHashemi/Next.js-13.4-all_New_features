"use client";
import React from "react";
import DownloadButtonProgress from "@/components/download-button-progress/download-button-progress";

export default async function Home() {
  return (
    <div className={"h-screen grid place-items-center bg-rose-500"}>
      <DownloadButtonProgress />
    </div>
  );
}
