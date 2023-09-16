import React from "react";
import ProductButton from "@/components/UI/product/product-button";

type Props = {
  title: string;
  price: string;
  id: string;
  nestedButton?: boolean;
};
const Product = (props: Props) => {
  return (
    <div className={"border border-rose-700"}>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      {!props.nestedButton && <ProductButton id={props.id} />}
    </div>
  );
};

export default Product;
