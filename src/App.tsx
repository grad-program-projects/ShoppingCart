import { createContext, use, useReducer, useContext } from "react";

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

type CartItem={
  id:number,
  title: string,
  price:number,
image:string,
quantity: number 
}

type CartState = {
  items: CartItem[]
}

type Action =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM";  payload: Product }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {

    case "ADD_ITEM": {
      const existing = state.items.find(item => item.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case "REMOVE_ITEM": {
      const existing = state.items.find(item => item.id === action.payload.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity -1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }

    case "UPDATE_QUANTITY": {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    }

    default:
      return state;
  }
}


const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};

const productsPromise: Promise<Product[]> = Promise.all(
  Array.from({ length: 20 }, (_, index) => fetchProduct(index + 1))
);

function ProductCard({ product, dispatch }: { product: Product; dispatch:React.Dispatch<Action> }) {
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

function ProductGrid({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const products: Product[] = use(productsPromise);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 0.2fr)", gap: "16px", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  return (
    <div style={{ padding: "20px", textAlign:"center" }}>
      <h1 >Products</h1>
      <p>Items in cart: {state.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
      <button> Cart </button>
        <ProductGrid dispatch={dispatch} />
    </div>
  );
}