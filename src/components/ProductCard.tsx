import { useCartDispatch } from "../context/CartContext";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  const dispatch = useCartDispatch();
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="bg-white px-6 pt-6 pb-3 h-48 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </figure>
      <div className="card-body p-4">
          <span className="badge badge-outline badge-sm capitalize">
          {product.category}
        </span>
        <p className="text-sm font-semibold line-clamp-2 mt-1">
          {product.title}
        </p>

        <p className="text-primary font-bold text-base">R{product.price}</p>

        <button
          className="btn btn-primary btn-sm w-full mt-2"
          onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
