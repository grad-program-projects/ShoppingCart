import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { CartState, Action } from "../types";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<React.Dispatch<Action> |null>(null)

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({children}: CartProviderProps){
    const [state, dispatch] = useReducer(cartReducer, {items:[]})

    return(
        <CartContext value={state}>
            <CartDispatchContext value={dispatch}>
                {children}
            </CartDispatchContext>
        </CartContext>

    )
}