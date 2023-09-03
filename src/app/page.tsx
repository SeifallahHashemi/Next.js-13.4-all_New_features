"use client";
import React from "react";
// Material UI - Font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Material UI - Components
// Other Libraries and Components
import Link from "next/link";
import NextjsProgressbar from "@/components/nextjsProgressbar/nextjs-progressbar";

export default async function Home() {
  return (
      <div>
          <NextjsProgressbar />
      </div>
  );
}
