import { use } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const productsPromise = fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => json)  

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: "1px solid #bc3232", padding: "10px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "contain" }} />
      <p>{product.title}</p>
      <p>R{product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

function ProductGrid() {
  const products: Product[] = use(productsPromise);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <button> Cart </button>
        <ProductGrid />
    </div>
  );
}