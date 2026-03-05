import { useCart } from "../context/CartContext";

export function CartSummary(){
    const {items}= useCart();
    const tottalItems= items.reduce((sum,item) => sum + item.quantity,0)

    return (
        <p>Items in cart: {tottalItems}</p>
    )
}