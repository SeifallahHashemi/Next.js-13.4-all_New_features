import React from "react";
import { useRouter } from "next13-progressbar";
import Link from "next/link";

const NextJsProgressbar = () => {
  const router = useRouter();
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <button onClick={() => router.push("/about")}>ButtonLink</button>
    </div>
  );
};

export default NextJsProgressbar;
