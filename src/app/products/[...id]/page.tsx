import React from 'react';
import Product from "@/components/UI/product/Product";

type Products = {
    product: string;
    price: string;
    id: string;
    nestedButton?: boolean;
};
export async function generateStaticParams() {
    const posts = await fetch('https://64db99de593f57e435b13182.mockapi.io/products').then((res) => res.json())

    return posts.map((post: { id: string }) => ({
      id: [post.id],
    }));
}
const getProducts = async (ids: string) => {
    const promises = [];
    for (const id of ids) {
    const res = await fetch(`https://64db99de593f57e435b13182.mockapi.io/products/${id}`);
        promises.push(res);
    }
    const data = await Promise.all(promises)
    return await Promise.all(data.map((d) => d.json()));
}
const ProductPage = async ({ params }: {params: { id: string}}) => {
    const { id } = params;
    const products: Products[] = await getProducts(id)
    console.log(products)
    return (
        <div className={"max-w-7xl mx-auto flex flex-col space-y-3"}>
            {products.length > 0 ? products.map((product) => {
                return <Product key={product.id} id={product.id} price={product.price} title={product.product} nestedButton={true}/>
            }) : null}
        </div>
    );
};

export default ProductPage;