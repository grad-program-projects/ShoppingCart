import { createContext, use, useReducer, useContext, Suspense } from "react";
import { cartReducer } from "./reducer/cartReducer";
import { ProductGrid } from './components/ProductGrid'
import { CartProvider } from "./context/CartContext";
import { CartSummary } from "./components/CartSummary";



export default function App() {

  return (
    <CartProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 >Products</h1>
        <CartSummary />
        <Suspense fallback={<p>Loading products...</p>}>
          <ProductGrid />
        </Suspense>

      </div>
    </CartProvider>
  );
}