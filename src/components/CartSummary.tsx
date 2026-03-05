import { useCart, useCartDispatch } from "../context/CartContext";

export function CartSummary() {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center text-base-content/50 py-6">
        <p>Your cart is empty</p>
      </div>
    );
  }
  return (
    <div className="card bg-base-100 shadow-sm" >
        <div className="card-body p-4" >
            <span></span>
      <h2 className="card-title text-primary">Cart 
        <span  className="badge badge-primary badge-sm">
            ({totalItems} items)
            </span></h2>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-3 py-2 border-b border-base-200 last:border-0"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-14 h-14 object-contain flex-shrink-0 bg-white rounded p-1"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium line-clamp-1">{item.title}</p>
            <p className="text-primary font-bold text-sm">R{item.price}</p>
          
           <div className="flex items-center gap-2 mt-1">
            <button className="btn btn-xs btn-outline btn-primary"
              onClick={() => dispatch({ type: "DECREASE_ITEM", payload: item })}
            >
              −
            </button>
            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
            <button className="btn btn-xs btn-outline btn-primary"
              onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
            >
              +
            </button>
            <button className="btn btn-xs btn-ghost text-error ml-2"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
            >
              Remove
            </button>
            </div>
          </div>
        </div>
      ))}

<div className="divider my-1" />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
      <span className="text-primary font-bold text-lg">R{totalPrice.toFixed(2)}</span>
      </div>

      <button className="btn btn-primary w-full mt-2" onClick={handleClick}>Checkout</button>
    </div>
    </div>
  );
}

function handleClick() {
  alert("Jokes...you're broke!");
}
