import { use } from "react";
import type{ Action, Product } from "../types";
import {ProductCard} from './ProductCard'
import {productsPromise} from '../productsPromise'

export function ProductGrid({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const products: Product[] = use(productsPromise);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 0.2fr)", gap: "16px", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} dispatch={dispatch} />
      ))}
    </div>
  );
}