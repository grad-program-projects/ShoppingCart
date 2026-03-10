import { Suspense } from "react";
import { ProductGrid } from "./components/ProductGrid";
import { CartSummary } from "./components/CartSummary";

export default function App() {
  return (
   
      <div data-theme="valentine" className="min-h-screen bg-base-200">
        
          
            <h1 className="text-xl font-bold text-primary px-4 ">Products</h1>
          
        

        <div className="max-w-6xl mx-auto p-6">
          <Suspense
            fallback={
              <p className="text-center text-base-content/50 py-20">
                Loading products...
              </p>
            }
          >
            <ProductGrid />
          </Suspense>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <CartSummary />
        </div>
      </div>
    
  );
}
