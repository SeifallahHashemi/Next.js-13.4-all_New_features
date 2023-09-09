"use client";
import React from "react";
import RouteIntercepting from "@/components/Next-js Route Intercepting/route-intercepting";

export default function Home() {
  return (
    <div className={"h-screen grid place-items-center bg-rose-500"}>
        <RouteIntercepting />
    </div>
  );
}
