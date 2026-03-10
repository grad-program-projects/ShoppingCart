
import { ProductCard } from "./ProductCard";
import { useGetProductsQuery } from "../store/productsApi";

export function ProductGrid() {
  const {data: products, isLoading, isError} = useGetProductsQuery();
if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
