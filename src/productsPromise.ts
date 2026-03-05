import type { Product } from "./types";

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};

export const productsPromise: Promise<Product[]> = Promise.all(
  Array.from({ length: 20 }, (_, index) => fetchProduct(index + 1))
);