import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

// loaders are used to provide data to a route before it loads
export const loader = async ({ request }) => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(meta)
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
