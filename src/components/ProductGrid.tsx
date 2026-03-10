import { use } from "react";
import { ProductCard } from "./ProductCard";
import { productsPromise } from "../productsPromise";

export function ProductGrid() {
  const products = use(productsPromise);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
