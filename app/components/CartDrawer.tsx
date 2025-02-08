"use client";

import { useCart } from "@/app/context/CartContext";

const CartDrawer: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="fixed top-0 right-0 w-1/3 bg-white shadow-lg h-full p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center border-b py-2">
            <div>
              <h3>{item.title}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartDrawer;
