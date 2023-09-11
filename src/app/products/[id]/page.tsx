import React from 'react';
import Product from "@/components/UI/product/Product";

export async function generateStaticParams() {
    const posts = await fetch('https://64db99de593f57e435b13182.mockapi.io/products').then((res) => res.json())

    return posts.map((post: { id: string }) => ({
      id: post.id,
    }));
}
const getProduct = async (id: string) => {
    const res = await fetch(`https://64db99de593f57e435b13182.mockapi.io/products/${id}`);
    const data = res.json();
    return data;
}
const ProductPage = async ({ params }: {params: { id: string}}) => {
    const { id } = params;
    const product = await getProduct(id)
    console.log(product)
    return (
        <div className={"max-w-7xl mx-auto"}>
            {!!product && <Product id={product.id} price={product.price} title={product.product} nestedButton={true}/>}
        </div>
    );
};

export default ProductPage;