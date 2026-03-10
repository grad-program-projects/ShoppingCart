import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CartState, Action } from "../types";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext<CartState>({ items: [] });
const CartDispatchContext = createContext<React.Dispatch<Action>>(() => {});

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext value={state}>
      <CartDispatchContext value={dispatch}>{children}</CartDispatchContext>
    </CartContext>
  );
}

export function useCart(): CartState {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
