import type { Product } from "../types";
import type { Action } from "../types";

export function ProductCard({ product, dispatch }: { product: Product; dispatch:React.Dispatch<Action> }) {
  return (
    <div style={{ border: "1px solid #2e2e2e", padding: "10px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
      <p>{product.title}</p>
      <p>R{product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>Add to cart</button>
      <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}>rMOVE</button>
    </div>
  );
}