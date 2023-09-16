import React from "react";
import Product from "@/components/UI/product/Product";

type Product = {
  product: string;
  price: string;
  id: string;
};
const getProducts = async () => {
  const response = await fetch(
    "https://64db99de593f57e435b13182.mockapi.io/products",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    },
  );
  const data = await response.json();
  return data;
};
const Products = async () => {
  const product: Product[] = await getProducts();
  return (
    <div className={"flex flex-col space-y-3 px-10"}>
      <h2>Products Page</h2>
      {product.length > 0
        ? product.map((product) => {
            return (
              <Product
                title={product.product}
                price={product.price}
                key={product.id}
                id={product.id}
              />
            );
          })
        : null}
    </div>
  );
};

export default Products;
