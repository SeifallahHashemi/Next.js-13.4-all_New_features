"use client"
import React from "react";
import { useRouter } from "next/navigation";

const ProductButton = ({ id }: { id: string }) => {
    const router = useRouter();
  const clickHandler = () => {
    router.push(`/products/${id}`);
  };
  return <button onClick={clickHandler}>Go to Product</button>;
};

export default ProductButton;