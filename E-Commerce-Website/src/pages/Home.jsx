import React from "react";
import { getProducts } from "../Data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = getProducts();
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-20 tracking-wide">
        <h1 className="text-5xl font-bold ">Welcome to the Shopi-<span className="text-orange-500">Hub</span></h1>
        <p className="mt-5 text-neutral-300">
          Discover out new and exclusive products
        </p>
      </div>
      <div className=" w-full h-auto px-20">
        <h1 className="px-20 mt-5 text-3xl font-bold ">Our Products</h1>

        <div className="py-5 flex flex-wrap gap-10 justify-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
