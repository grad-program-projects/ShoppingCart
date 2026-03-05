import { Suspense } from "react";
import { ProductGrid } from "./components/ProductGrid";
import { CartProvider } from "./context/CartContext";
import { CartSummary } from "./components/CartSummary";

export default function App() {
  return (
    <CartProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Products</h1>

        <Suspense fallback={<p>Loading products...</p>}>
          <ProductGrid />
        </Suspense>
        <CartSummary />
      </div>
    </CartProvider>
  );
}
