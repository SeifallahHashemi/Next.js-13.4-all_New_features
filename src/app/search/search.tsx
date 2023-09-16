"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        className={"border border-rose-700"}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className={"border border-rose-700"} type={"submit"}>Search</button>
    </form>
  );
};

export default Search;
