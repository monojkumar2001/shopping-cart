import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleStatusTab } from "../stores/cart";

const CartTab = ({ onClose }) => {
  const carts = useSelector((store) => store.cart.items);
  const statusTap = useSelector((store) => store.cart.statusTap);

  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 
        ${statusTap === false ? "translate-x-full" : ""}
        `}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 overflow-y-auto">
        {carts.length > 0 ? (
          carts.map((item) => <CartItem key={item.productId} data={item} />)
        ) : (
          <p className="text-white">Your cart is empty.</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 p-5">
        <button
          className="bg-black text-white uppercase py-2"
          onClick={handleCloseTabCart} // Close cart when this button is clicked
        >
          Close
        </button>
        <button className="bg-amber-600 text-white uppercase py-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTab;
