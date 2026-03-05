import { useCart, useCartDispatch } from "../context/CartContext";

export function CartSummary() {
    const { items } = useCart();
    const tottalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const dispatch = useCartDispatch();

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    if (items.length === 0) {
        return <p>Your cart is empty</p>;
    }
    return (
        <div>
            <h2>Cart ({totalItems} items)</h2>

            {items.map(item => (
                <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #ccc", padding: "10px 0" }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "60px", height: "60px", objectFit: "contain", flexShrink: 0 }}
                    />
                    <div>
                        <p>{item.title}</p>
                        <p>R{item.price}</p>
                        <button onClick={() => dispatch({ type: "DECREASE_ITEM", payload: item })}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}>+</button>
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}>Remove</button>
                    </div>
                </div>
            ))}

            <p>Total: R{totalPrice.toFixed(2)}</p>
            <button onClick={handleClick}>Checkout</button>
        </div>


    )
}

function handleClick(){
   
    alert("Jokes...you're broke!");
    
  
}