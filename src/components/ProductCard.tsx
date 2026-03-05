import { useCart, useCartDispatch } from "../context/CartContext";
import type { Product } from "../types";
import type { Action } from "../types";

export function ProductCard({ product }: { product: Product}) {
  const dispatch = useCartDispatch();
    return (
    <div style={{ border: "1px solid #2e2e2e", padding: "10px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
      <p>{product.title}</p>
      <p>R{product.price}</p>
<button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
  +
</button>
    </div>
  );
}