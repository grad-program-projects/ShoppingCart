import { createContext, use, useReducer, useContext } from "react";
import { cartReducer } from "./reducer/cartReducer";
import {ProductGrid} from './components/ProductGrid'



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